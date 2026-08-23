"use client";
import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
    type Dispatch,
    type SetStateAction,
} from "react";

type CookieOptions = {
    domain?: string;
    path?: string;
    maxAgeDays?: number;
    secure?: boolean;
    sameSite?: "Lax" | "Strict" | "None";
};

function getCookie(name: string): string | undefined {
    if (typeof document === "undefined") return undefined;
    const match = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${name}=`));
    if (!match) return undefined;
    return decodeURIComponent(match.split("=").slice(1).join("="));
}

function setCookie(name: string, value: string, options: CookieOptions) {
    if (typeof document === "undefined") return;

    const {
        domain,
        path = "/",
        maxAgeDays = 365,
        secure = true,
        sameSite = "Lax",
    } = options;

    let cookieStr = `${name}=${encodeURIComponent(value)}; path=${path}; max-age=${maxAgeDays * 24 * 60 * 60
        }; SameSite=${sameSite}`;

    if (domain) cookieStr += `; domain=${domain}`;
    if (secure) cookieStr += `; Secure`;

    document.cookie = cookieStr;
}

export function createCookiesContext<T extends object>(
    cookieKey: string,
    defaultValue: T,
    path: string = "/",
    domain?: string,
) {

    const contextName =
        cookieKey.charAt(0).toUpperCase() +
        cookieKey
            .slice(1)
            .replace(/([A-Z])/g, " $1")
            .trim()
            .replace(/ /g, "");

    type ContextType = [T, Dispatch<SetStateAction<T>>];

    const CookieContext = createContext<ContextType | undefined>(undefined);
    CookieContext.displayName = contextName;

    const Provider = ({ children }: { children: ReactNode }) => {
        const [state, setState] = useState<T>(defaultValue);


        useEffect(() => {
            const stored = getCookie(cookieKey);
            if (stored) {
                try {
                    const parsed = JSON.parse(stored) as T;
                    setState((prev) => ({
                        ...prev,
                        ...parsed,
                    }));
                } catch (error) {
                    console.error(
                        `Failed to parse ${cookieKey} from cookies`,
                        error
                    );
                }
            }
        }, []);

        useEffect(() => {
            setCookie(cookieKey, JSON.stringify(state), { path, domain });
        }, [state]);

        const contextValue = [state, setState] as ContextType;

        return (
            <CookieContext.Provider value={contextValue}>
                {children}
            </CookieContext.Provider>
        );
    };

    const useValue = (): ContextType => {
        const context = useContext(CookieContext);
        if (context === undefined) {
            throw new Error(
                `use${contextName} must be used within a ${contextName}Provider`
            );
        }
        return context;
    };

    return [Provider, useValue] as const;
}
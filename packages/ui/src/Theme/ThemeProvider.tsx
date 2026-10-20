
import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";

export type Theme = "light" | "dark" | "system";

export type ResolvedTheme = "light" | "dark";

export interface ThemeContextValue {
    theme: Theme;
    resolvedTheme: ResolvedTheme;
    setTheme: (theme: Theme) => void;
}

export interface ThemeProviderProps {
    children: ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(
    undefined
);

export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "yakad-theme",
}: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>(defaultTheme);
    const [systemTheme, setSystemTheme] =
        useState<ResolvedTheme>("light");

    const setTheme = useCallback(
        (nextTheme: Theme) => {
            setThemeState(nextTheme);

            if (typeof window !== "undefined") {
                try {
                    window.localStorage.setItem(storageKey, nextTheme);
                } catch (error) {
                    console.error("Failed to save theme preference:", error);
                }
            }
        },
        [storageKey]
    );

    useEffect(() => {
        try {
            const storedTheme = window.localStorage.getItem(storageKey);

            if (
                storedTheme === "light" ||
                storedTheme === "dark" ||
                storedTheme === "system"
            ) {
                setThemeState(storedTheme);
            }
        } catch {
            return;
        }
    }, [storageKey]);

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            "(prefers-color-scheme: dark)"
        );

        const updateSystemTheme = () => {
            setSystemTheme(mediaQuery.matches ? "dark" : "light");
        };

        updateSystemTheme();
        mediaQuery.addEventListener("change", updateSystemTheme);

        return () => {
            mediaQuery.removeEventListener("change", updateSystemTheme);
        };
    }, []);

    const resolvedTheme: ResolvedTheme =
        theme === "system" ? systemTheme : theme;

    useEffect(() => {
        const root = document.documentElement;

        root.classList.toggle("dark", resolvedTheme === "dark");
        root.style.colorScheme = resolvedTheme;
    }, [resolvedTheme]);

    useEffect(() => {
        const handleStorage = (event: StorageEvent) => {
            if (event.key !== storageKey || !event.newValue) {
                return;
            }

            if (
                event.newValue === "light" ||
                event.newValue === "dark" ||
                event.newValue === "system"
            ) {
                setThemeState(event.newValue);
            }
        };

        window.addEventListener("storage", handleStorage);

        return () => {
            window.removeEventListener("storage", handleStorage);
        };
    }, [storageKey]);

    const value = useMemo(
        () => ({
            theme,
            resolvedTheme,
            setTheme,
        }),
        [theme, resolvedTheme, setTheme]
    );

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): ThemeContextValue {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useTheme must be used within a ThemeProvider"
        );
    }

    return context;
}

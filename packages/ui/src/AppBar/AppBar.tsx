"use client";

import { useEffect, useState } from "react";
import classNames from "classnames";
import boxingStyles from "../boxing.module.css";
import styles from "./AppBar.module.css";

export interface AppBarProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "space" | "center" | "end";
    position?: "initial" | "sticky" | "scroll";
    overflow?: "shrink" | "wrap" | "scroll";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    blur?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLDivElement>;
}

export function AppBar({
    align,
    overflow = "shrink",
    position = "initial",
    size,
    blur,
    className,
    children,
    ref,
    ...restProps
}: AppBarProps) {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        if (position !== "scroll") return;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Scroll down
                setShow(false);
            } else {
                // Scroll up
                setShow(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, position]);

    const joinedClassNames = classNames(
        boxingStyles.flexRowBox,
        { [boxingStyles[align as string]]: align },
        boxingStyles[overflow],
        styles.header,
        {
            [styles.sticky]: position === "sticky" || position === "scroll",
        },
        { [styles.hidden]: position === "scroll" && !show },
        { [styles[size as string]]: size },
        { [styles.blur]: blur },
        className
    );

    return (
        <header ref={ref} {...restProps} className={joinedClassNames}>
            {children}
        </header>
    );
}

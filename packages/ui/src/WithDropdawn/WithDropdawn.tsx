"use client";

import { useRef, useState, useEffect, cloneElement } from "react";
import classNames from "classnames";
import { WithInteractions } from "../";
import boxingStyles from "../boxing.module.css";
import styles from "./WithDropdawn.module.css";

export interface WithDropdawnProps
    extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "center" | "end";
    blur?: boolean;
    trigger?: "onClick" | "onRightClick";
    dropdawnChildren?: React.ReactElement;
    children?: React.ReactElement<{
        onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    }>;
}

export const WithDropdawn = ({
    align,
    blur,
    trigger = "onClick",
    dropdawnChildren,
    className,
    style,
    children,
    ...restProps
}: WithDropdawnProps) => {
    const toggleElementRef = useRef<HTMLElement | null>(null);
    const dropdawnRef = useRef<HTMLDivElement | null>(null);
    const [showDropdawn, setShowDropdawn] = useState(false);
    const [dropdawnOnTop, setDropdawnOnTop] = useState(false);
    const [top, setTop] = useState<number>(0);
    const [left, setLeft] = useState<number>(0);

    const toggleShowDropdawn = () => setShowDropdawn((prev) => !prev);

    useEffect(() => {
        if (toggleElementRef.current && dropdawnRef.current) {
            const buttonRect = toggleElementRef.current.getBoundingClientRect();
            const dropdawnRect = dropdawnRef.current.getBoundingClientRect();
            const padding = 10;

            let top = buttonRect.bottom + padding;
            let left =
                buttonRect.left + buttonRect.width / 2 - dropdawnRect.width / 2;

            // Prevent overflow bottom
            if (top + dropdawnRect.height > window.innerHeight) {
                top = buttonRect.top - dropdawnRect.height - padding;
                setDropdawnOnTop(true);
            } else setDropdawnOnTop(false);

            // Prevent overflow right
            if (left + dropdawnRect.width > window.innerWidth - padding) {
                left = window.innerWidth - dropdawnRect.width - padding;
            }

            // Prevent overflow left
            if (left < padding) {
                left = padding;
            }

            setTop(top);
            setLeft(left);
        }
    }, [showDropdawn, dropdawnChildren]);

    const joinedClassNames = classNames(
        boxingStyles.flexColumnBox,
        { [boxingStyles[align as string]]: align },
        styles.dropdawnCard,
        { [styles.dropdawnOnTop]: dropdawnOnTop },
        { [styles.blur]: blur },
        className
    );

    return (
        <>
            <WithInteractions
                ref={toggleElementRef}
                onRightClick={() =>
                    trigger === "onRightClick" && setShowDropdawn(true)
                }
            >
                {children &&
                    cloneElement(children, {
                        onClick: (e: React.MouseEvent<HTMLElement>) => {
                            children.props.onClick?.(e);
                            trigger === "onClick" && toggleShowDropdawn();
                        },
                    })}
            </WithInteractions>
            <WithInteractions onOutsideClick={() => setShowDropdawn(false)}>
                <div
                    ref={dropdawnRef}
                    {...restProps}
                    className={joinedClassNames}
                    style={{
                        top: top,
                        left: left,
                        visibility: showDropdawn ? "visible" : "hidden",
                        ...style,
                    }}
                >
                    {dropdawnChildren}
                </div>
            </WithInteractions>
        </>
    );
};
WithDropdawn.displayName = "WithDropdawn";

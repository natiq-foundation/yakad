import classNames from "classnames";
import { Stack, StackProps } from "..";
import styles from "./Card.module.css";

export interface CardProps extends StackProps {
    blur?: boolean;
    level?: "transparent" | "low" | "mid" | "high";
    hoverEffect?: boolean;
    ref?: React.Ref<HTMLDivElement>;
}

export function Card({
    blur,
    level,
    hoverEffect,
    className,
    children,
    ref,
    ...restProps
}: CardProps) {
    const joinedClassNames = classNames(
        styles.card,
        { [styles.blur]: blur },
        { [styles.elevated]: level !== "transparent" },
        { [styles.hoverEffect]: hoverEffect },
        { [styles.yakadCardAutoLevel]: !level || level === "transparent" },
        { [styles.yakadCardLowLevel]: level === "low" },
        { [styles.yakadCardMidLevel]: level === "mid" },
        { [styles.yakadCardHighLevel]: level === "high" },
        className
    );

    return (
        <Stack ref={ref} {...restProps} className={joinedClassNames}>
            {children}
        </Stack>
    );
}

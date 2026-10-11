import classNames from "classnames";
import styles from "./public/css/Spinner.module.css";
import type { IconSizeKey } from "./sizes";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: IconSizeKey;
    variant?: "scaleOut" | "dots" | "spinner";
    ref?: React.Ref<HTMLDivElement>;
}

export function Spinner({
    size = "medium",
    variant = "dots",
    className,
    ...restProps
}: SpinnerProps) {
    const joinedClassNames = classNames(
        styles.spinner,
        styles[size],
        styles[variant],
        className
    );

    return (
        <div {...restProps} className={joinedClassNames}>
            <div></div>
        </div>
    );
}
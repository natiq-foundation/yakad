import classNames from "classnames";
import styles from "./LoadingIcon.module.css";

export interface LoadingIconProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "extraSmall" | "small" | "medium" | "large" | "extraLarge";
    variant?: "scaleOut" | "dots" | "spinner";
}

export function LoadingIcon({
         size = "medium", variant = "dots", className,
        ref,
        ...restProps
    }: LoadingIconProps & { ref?: React.Ref<HTMLDivElement> }) {
        const joinedClassNames = classNames(
            styles.loadingIcon,
            styles[size],
            styles[variant],
            className
        );

        return (
            <div ref={ref} {...restProps} className={joinedClassNames}>
                <div></div>
            </div>
        );
    }

import classNames from "classnames";
import boxingStyles from "../boxing.module.css";
import styles from "./Container.module.css";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "space" | "center" | "end";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    children?: React.ReactNode;
    ref?: React.Ref<HTMLDivElement>;
}

export function Container({
    size = "xl",
    align,
    className,
    children,
    ref,
    ...restProps
}: ContainerProps) {
    const joinedClassNames = classNames(
        boxingStyles.flexColumnBox,
        { [boxingStyles[align as string]]: align },
        { [boxingStyles.demandChildsToBeFullWidth]: true },
        styles.container,
        styles[size],
        className
    );

    return (
        <div ref={ref} {...restProps} className={joinedClassNames}>
            {children}
        </div>
    );
}

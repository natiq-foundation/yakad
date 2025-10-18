import classNames from "classnames";
import boxingStyles from "../boxing.module.css";
import styles from "./Stack.module.css";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "space" | "center" | "end";
    fullWidthOnParentDemand?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLDivElement>;
}

export function Stack({
    align,
    fullWidthOnParentDemand = true,
    className,
    children,
    ref,
    ...restProps
}: StackProps) {
    const joinedClassNames = classNames(
        boxingStyles.flexColumnBox,
        { [boxingStyles[align as string]]: align },
        { [boxingStyles.demandChildsToBeFullWidth]: true },
        { [boxingStyles.fullWidthOnParentDemand]: fullWidthOnParentDemand },
        styles.stack,
        className
    );

    return (
        <div ref={ref} {...restProps} className={joinedClassNames}>
            {children}
        </div>
    );
}

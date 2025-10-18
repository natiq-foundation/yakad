import React from "react";
import classNames from "classnames";
import boxingStyles from "../boxing.module.css";
import styles from "./Display.module.css";

export interface DisplayProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "space" | "center" | "end";
    fullWidthOnParentDemand?: boolean;
    minWidth?: "xs" | "sm" | "md" | "lg" | "xl";
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
    children?: React.ReactNode;
}

export function Display({
    align,
    fullWidthOnParentDemand = true,
    minWidth,
    maxWidth,
    className,
    children,
    ref,
    ...restProps
}: DisplayProps & { ref?: React.Ref<HTMLDivElement> }) {
    const joinedClassNames = classNames(
        boxingStyles.flexColumnBox,
        { [boxingStyles[align as string]]: align },
        { [boxingStyles.demandChildsToBeFullWidth]: true },
        { [boxingStyles.fullWidthOnParentDemand]: fullWidthOnParentDemand },
        { [styles[`${minWidth}MinWidth`]]: minWidth },
        { [styles[`${maxWidth}MaxWidth`]]: maxWidth },
        className
    );

    return (
        <div ref={ref} {...restProps} className={joinedClassNames}>
            {children}
        </div>
    );
}

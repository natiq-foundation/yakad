import { forwardRef } from "react";
import classNames from "classnames";
import styles from "./List.module.css";

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
    direction?: "row" | "column";
    collapsed?: boolean;
    children?: React.ReactNode;
}

export const List = forwardRef<HTMLUListElement, ListProps>(function List(
    { direction = "row", collapsed, className, children, ...restProps },
    ref
) {
    const joinedClassNames = classNames(
        { fullWidthOnParentDemand: true },
        styles.list,
        styles[direction],
        { [styles.collapsed]: collapsed },
        className
    );

    return (
        <ul ref={ref} {...restProps} className={joinedClassNames}>
            {children}
        </ul>
    );
});

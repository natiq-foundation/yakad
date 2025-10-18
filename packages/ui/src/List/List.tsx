import classNames from "classnames";
import boxingStyles from "../boxing.module.css";
import styles from "./List.module.css";

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
    direction?: "row" | "column";
    collapsed?: boolean;
    children?: React.ReactNode;
}

export function List({
         direction = "row", collapsed, className, children,
        ref,
        ...restProps
    }: ListProps & { ref?: React.Ref<HTMLUListElement> }) {
    const joinedClassNames = classNames(
        { [boxingStyles.fullWidthOnParentDemand]: true },
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
}

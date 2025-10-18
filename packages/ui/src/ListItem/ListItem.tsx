import classNames from "classnames";
import boxingStyles from "../boxing.module.css";
import styles from "./ListItem.module.css";

export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
    align?: "start" | "space" | "center" | "end";
}

export function ListItem({
         align, className, children, 
        ref,
        ...restProps
    }: ListItemProps & { ref?: React.Ref<HTMLLIElement> }) {
        return (
            <li
                ref={ref}
                {...restProps}
                className={classNames(
                    boxingStyles.flexColumnBox,
                    { [boxingStyles[align as string]]: align },
                    { [boxingStyles.demandChildsToBeFullWidth]: true },
                    styles.listItem,
                    className
                )}
            >
                {children}
            </li>
        );
    }

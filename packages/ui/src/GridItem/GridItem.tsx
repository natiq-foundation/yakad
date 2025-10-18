import classNames from "classnames";
import boxingStyles from "../boxing.module.css";
import styles from "./GridItem.module.css";

type GridColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "space" | "center" | "end";
    xs?: GridColumn;
    sm?: GridColumn;
    md?: GridColumn;
    lg?: GridColumn;
    xl?: GridColumn;
    children?: React.ReactNode;
}

export function GridItem({
         align, xs, sm, md, lg, xl, className, children,
        ref,
        ...restProps
    }: GridItemProps & { ref?: React.Ref<HTMLDivElement> }) {
        const joinedClassNames = classNames(
            boxingStyles.flexColumnBox,
            { [boxingStyles[align as string]]: align },
            { [boxingStyles.demandChildsToBeFullWidth]: true },
            styles.gridItem,
            { [styles[`xs${xs}`]]: xs },
            { [styles[`sm${sm}`]]: sm },
            { [styles[`md${md}`]]: md },
            { [styles[`lg${lg}`]]: lg },
            { [styles[`xl${xl}`]]: xl },
            className
        );

        return (
            <div ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </div>
        );
    }

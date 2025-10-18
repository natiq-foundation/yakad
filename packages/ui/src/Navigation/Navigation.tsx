import classNames from "classnames";
import boxingStyles from "../boxing.module.css";
import styles from "./Navigation.module.css";

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
    align?: "start" | "space" | "center" | "end";
    anchor?: "left" | "right" | "top" | "bottom" | "auto";
    open: boolean;
    children?: React.ReactNode;
}

export function Navigation({
        
            align,
            anchor = "auto",
            open = false,
            className,
            children,
        ref,
        ...restProps
    }: NavigationProps & { ref?: React.Ref<HTMLDivElement> }) {
        const joinedClassNames = classNames(
            boxingStyles.flexColumnBox,
            { [boxingStyles[align as string]]: align },
            { [boxingStyles.demandChildsToBeFullWidth]: true },
            styles.navigation,
            styles[anchor],
            {
                [styles.open]: open,
            },
            className
        );

        return (
            <nav ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </nav>
        );
    }

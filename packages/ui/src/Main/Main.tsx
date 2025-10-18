import classNames from "classnames";
import boxingStyles from "../boxing.module.css";
import styles from "./Main.module.css";

export interface MainProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: "start" | "space" | "center" | "end";
    navOpen?: boolean;
    children?: React.ReactNode;
}

export function Main({
         align, navOpen = false, className, children,
        ref,
        ...restProps
    }: MainProps & { ref?: React.Ref<HTMLDivElement> }) {
    const joinedClassNames = classNames(
        boxingStyles.flexColumnBox,
        { [boxingStyles[align as string]]: align },
        { [boxingStyles.demandChildsToBeFullWidth]: true },
        styles.main,
        { [styles.navOpen]: navOpen },
        className
    );

    return (
        <main ref={ref} {...restProps} className={joinedClassNames}>
            {children}
        </main>
    );
}

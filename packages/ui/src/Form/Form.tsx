import classNames from "classnames";
import styles from "./Form.module.css";
import boxingStyles from "../boxing.module.css";

export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
    align?: "start" | "space" | "center" | "end";
    fullWidthOnParentDemand?: boolean;
    children?: React.ReactNode;
}

export function Form({
        align,
        fullWidthOnParentDemand = true,
        className,
        children,
        ref,
        ...restProps
    }: FormProps & { ref?: React.Ref<HTMLFormElement> }) {
    const joinedClassNames = classNames(
        boxingStyles.flexColumnBox,
        { [boxingStyles[align as string]]: align },
        { [boxingStyles.demandChildsToBeFullWidth]: true },
        { [boxingStyles.fullWidthOnParentDemand]: fullWidthOnParentDemand },
        styles.form,
        className
    );

    return (
        <form ref={ref} {...restProps} className={joinedClassNames}>
            {children}
        </form>
    );
}

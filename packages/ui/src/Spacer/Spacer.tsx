import classNames from "classnames";
import styles from "./Spacer.module.css";

export interface SpacerProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {}

export function Spacer({
         className, 
        ref,
        ...restProps
    }: SpacerProps & { ref?: React.Ref<HTMLDivElement> }) {
    const joinedClassNames = classNames(styles.spacer, className);

    return <div ref={ref} {...restProps} className={joinedClassNames} />;
}

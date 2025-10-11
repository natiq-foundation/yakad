import { forwardRef } from "react";
import classNames from "classnames";
import { Symbol } from "@yakad/symbols";
import styles from "./CheckBox.module.css";

type ExcludedTypes = "type";
export interface CheckBoxProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, ExcludedTypes> {
    label?: string;
}

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
    function CheckBox({ label, className, style, ...restProps }, ref) {
        const joinedClassNames = classNames(
            { fullWidthOnParentDemand: label },
            styles.label,
            { [styles.labeled]: label },
            { [styles.disabled]: restProps.disabled },
            className
        );

        return (
            <label className={joinedClassNames} style={style}>
                {label}
                <input
                    ref={ref}
                    {...restProps}
                    className={styles.input}
                    type="checkbox"
                />
                <div className={styles.symbolContainer}>
                    <Symbol
                        className={styles.symbolChecked}
                        icon={"check_box"}
                    />
                    <Symbol
                        className={styles.symbolUnChecked}
                        icon={"check_box_outline_blank"}
                    />
                </div>
            </label>
        );
    }
);

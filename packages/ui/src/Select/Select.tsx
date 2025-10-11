import { forwardRef } from "react";
import classNames from "classnames";
import styles from "./Select.module.css";
import inputStyles from "../InputField/InputField.module.css";

export interface SelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> {
    variant?: "outlined" | "filled";
    boxsize?: "small" | "normal";
    placeholder?: string;
    children?: React.ReactNode;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    function Select(
        {
            variant = "outlined",
            boxsize = "normal",
            placeholder,
            className,
            children,
            ...restProps
        },
        ref
    ) {
        const joinedClassNames = classNames(
            styles.select,
            inputStyles.input,
            inputStyles[variant],
            inputStyles[boxsize],
            { [inputStyles.havePlaceHolder]: placeholder },
            className
        );

        return (
            <div
                className={classNames(
                    { fullWidthOnParentDemand: true },
                    inputStyles.div
                )}
            >
                <select ref={ref} {...restProps} className={joinedClassNames}>
                    {children}
                </select>
                {placeholder ? (
                    <label className={inputStyles.label}>{placeholder}</label>
                ) : null}
            </div>
        );
    }
);

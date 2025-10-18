import React from "react";
import classNames from "classnames";
import boxingStyles from "../boxing.module.css";
import styles from "./InputField.module.css";

export interface InputFieldProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: "outlined" | "filled";
    boxSize?: "small" | "normal";
    ref?: React.Ref<HTMLInputElement>;
}

export function InputField({
    variant = "outlined",
    boxSize = "normal",
    placeholder,
    className,
    ref,
    ...restProps
}: InputFieldProps) {
    const joinedClassNames = classNames(
        styles.input,
        styles[variant],
        styles[boxSize],
        placeholder && styles.havePlaceHolder,
        className
    );

    return (
        <div
            className={classNames(
                { [boxingStyles.fullWidthOnParentDemand]: true },
                styles.div
            )}
        >
            <input
                ref={ref}
                {...restProps}
                className={joinedClassNames}
                placeholder=" "
            />
            {placeholder && (
                <label className={styles.label}>{placeholder}</label>
            )}
        </div>
    );
}

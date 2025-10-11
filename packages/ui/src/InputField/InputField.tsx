import React, { forwardRef } from "react";
import classNames from "classnames";
import styles from "./InputField.module.css";

export interface InputFieldProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: "outlined" | "filled";
    boxSize?: "small" | "normal";
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    function InputField(
        {
            variant = "outlined",
            boxSize = "normal",
            placeholder,
            className,
            ...restProps
        },
        ref
    ) {
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
                    { fullWidthOnParentDemand: true },
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
);

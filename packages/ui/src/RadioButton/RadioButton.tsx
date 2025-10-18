"use client";

import classNames from "classnames";
import { Symbol } from "@yakad/symbols";
import { Button } from "..";
import styles from "./RadioButton.module.css";

type ExcludedTypes =
    | "type"
    | "name"
    | "defaultValue"
    | "defaultChecked"
    | "checked";
export interface RadioButtonProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, ExcludedTypes> {
    value: string | number;
    label?: string;
    dataFromRadioGroup?: {
        name: string;
        onSelect: () => void;
        checked: boolean;
    };
ref?: React.Ref<HTMLInputElement>
}

export function RadioButton({
         dataFromRadioGroup, label, onClick, className,
        ref,
        ...restProps
    }: RadioButtonProps) {
        const joinedClassNames = classNames(styles.radiobutton, {
            [styles.labeled]: label,
            className,
})

        const onClickRadioButtonHandler = () => {
            dataFromRadioGroup?.onSelect();
            onClick;
        };

        return (
            <div className={joinedClassNames}>
                {label && (
                    <label
                        className={styles.label}
                        htmlFor={dataFromRadioGroup?.name}
                    >
                        {label}
                    </label>
                )}
                <Button
                    icon={
                        <Symbol
                            icon={
                                dataFromRadioGroup?.checked
                                    ? "radio_button_checked"
                                    : "radio_button_unchecked"
                            }
                        />
                    }
                    onClick={onClickRadioButtonHandler}
                    disabled={restProps.disabled}
                />
                <input
                    ref={ref}
                    {...restProps}
                    className={styles.input}
                    type="radio"
                    name={dataFromRadioGroup?.name}
                    checked={dataFromRadioGroup?.checked}
                />
            </div>
        );
    }

"use client";

import classNames from "classnames";
import boxingStyles from "../boxing.module.css";
import styles from "./CodeField.module.css";

type ExcludedTypes = "minLength" | "maxLength" | "type";
export interface CodeFieldsProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, ExcludedTypes> {
    length?: number;
    onFilled?: () => void;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLInputElement>;
}

function isInputFilled(
    event: React.FormEvent<HTMLInputElement>,
    inputLength: number
): boolean {
    const targetInputElement = event.target as HTMLInputElement;
    removeUnNumberChars(targetInputElement);
    if (inputLength === targetInputElement.value.length) return true;
    sliceOverLength(targetInputElement, inputLength);
    return false;
}

function sliceOverLength(
    inputElement: HTMLInputElement,
    inputLength: number
): void {
    const targetLength = inputElement.value.length;
    if (targetLength > inputLength)
        inputElement.value = inputElement.value.slice(0, inputLength);
}

function removeUnNumberChars(inputElement: HTMLInputElement): void {
    inputElement.value = inputElement.value.replace(/[^0-9]+/, "");
}

export function CodeField({
    length = 6,
    onFilled,
    autoComplete,
    pattern,
    onInput,
    className,
    style,
    ref,
    ...restProps
}: CodeFieldsProps) {
    const joinedClassNames = classNames(
        { [boxingStyles.fullWidthOnParentDemand]: true },
        styles.input,
        className
    );

    const joinedStyles = { ...style, width: `calc(1.5ch * ${length})` };

    return (
        <input
            ref={ref}
            {...restProps}
            className={joinedClassNames}
            style={joinedStyles}
            type="number"
            minLength={length}
            maxLength={length}
            autoComplete={autoComplete || "off"}
            pattern={pattern || "[0-9]"}
            onInput={(event) => {
                if (isInputFilled(event, length)) {
                    onFilled?.();
                }
                onInput?.(event);
            }}
        />
    );
}

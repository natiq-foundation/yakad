
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
    "flex w-full rounded-md border px-3 text-sm shadow-sm transition-colors outline-none placeholder:text-[var(--md-sys-color-on-surface-variant)] focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: {
                outlined:
                    "border-[var(--md-sys-color-outline)] bg-transparent text-[var(--md-sys-color-on-surface)] focus-visible:border-[var(--md-sys-color-primary)] focus-visible:ring-[var(--md-sys-color-primary)]",

                filled:
                    "border-transparent bg-[var(--md-sys-color-surface-container-highest)] text-[var(--md-sys-color-on-surface)] focus-visible:border-[var(--md-sys-color-primary)] focus-visible:ring-[var(--md-sys-color-primary)]",
            },
            boxSize: {
                small: "h-8",
                normal: "h-10",
            },
        },
        defaultVariants: {
            variant: "outlined",
            boxSize: "normal",
        },
    }
);

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
    ref?: React.Ref<HTMLInputElement>;
}

export function Input({
    variant,
    boxSize,
    className,
    ref,
    ...restProps
}: InputProps) {
    return (
        <input
            ref={ref}
            data-slot="input"
            className={inputVariants({
                variant,
                boxSize,
                className,
            })}
            {...restProps}
        />
    );
}

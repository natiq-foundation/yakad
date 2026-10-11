import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
    "flex w-full rounded-md border bg-transparent px-3 text-sm shadow-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: {
                outlined:
                    "border-input focus-visible:border-ring focus-visible:ring-ring",
                filled:
                    "border-transparent bg-muted focus-visible:ring-ring",
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
            className={inputVariants({
                variant,
                boxSize,
                className,
            })}
            {...restProps}
        />
    );
}
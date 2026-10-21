
import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-sys-color-secondary)] disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                filled:
                    "bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] hover:opacity-90",

                tonal:
                    "bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] hover:opacity-90",

                outlined:
                    "border border-[var(--md-sys-color-outline)] bg-transparent text-[var(--md-sys-color-primary)] hover:bg-[var(--md-sys-color-surface-container)]",

                elevated:
                    "bg-[var(--md-sys-color-surface-container-low)] text-[var(--md-sys-color-on-surface)] shadow-sm hover:bg-[var(--md-sys-color-surface-container)]",

                text:
                    "bg-transparent text-[var(--md-sys-color-primary)] hover:bg-[var(--md-sys-color-primary)]/10",
            },
        },
        defaultVariants: {
            variant: "filled",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            asChild = false,
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : "button";

        return (
            <Comp
                ref={ref}
                data-slot="button"
                className={buttonVariants({
                    variant,
                    className,
                })}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button, buttonVariants };

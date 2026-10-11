import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                filled:
                    "bg-primary text-primary-foreground hover:bg-primary/90",
                tonal:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                outlined:
                    "border border-outline bg-transparent text-foreground hover:bg-muted",
                elevated:
                    "bg-surface text-foreground shadow-sm hover:bg-muted",
                text:
                    "bg-transparent text-primary hover:bg-primary/10",
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
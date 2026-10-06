import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, type VariantProps } from "class-variance-authority";

const checkboxVariants = cva(
    [
        "peer",
        "relative",
        "inline-flex",
        "shrink-0",
        "items-center",
        "justify-center",
        "rounded-[4px]",
        "border",
        "border-slate-500",
        "bg-transparent",
        "text-white",
        "transition-colors",
        "duration-150",
        "ease-out",
        "outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-slate-500",
        "focus-visible:ring-offset-2",
        "disabled:pointer-events-none",
        "disabled:opacity-50",
        "data-[state=checked]:border-slate-900",
        "data-[state=checked]:bg-slate-900",
        "data-[state=indeterminate]:border-slate-900",
        "data-[state=indeterminate]:bg-slate-900",
    ],
    {
        variants: {
            size: {
                small: "h-4 w-4",
                medium: "h-[18px] w-[18px]",
                large: "h-5 w-5",
            },
        },
        defaultVariants: {
            size: "medium",
        },
    },
);

type CheckboxProps =
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
    VariantProps<typeof checkboxVariants>;

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    CheckboxProps
>(({ className, size, ...props }, ref) => {
    return (
        <CheckboxPrimitive.Root
            ref={ref}
            className={checkboxVariants({ size, className })}
            {...props}
        >
            <CheckboxPrimitive.Indicator
                className="flex items-center justify-center"
            >
                <svg
                    viewBox="0 0 24 24"
                    className="h-full w-full"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M5 12.5 10 17l9-10" />
                </svg>
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    );
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, checkboxVariants };
export type { CheckboxProps };
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva, type VariantProps } from "class-variance-authority";

const radioGroupVariants = cva(
    "grid",
    {
        variants: {
            orientation: {
                horizontal: "grid-flow-col auto-cols-max gap-4",
                vertical: "grid-flow-row gap-3",
            },
        },
        defaultVariants: {
            orientation: "vertical",
        },
    },
);

const radioGroupItemVariants = cva(
    [
        "peer",
        "relative",
        "shrink-0",
        "rounded-full",
        "border",
        "border-slate-500",
        "bg-transparent",
        "outline-none",
        "transition-colors",
        "duration-150",
        "ease-out",
        "focus-visible:ring-2",
        "focus-visible:ring-slate-500",
        "focus-visible:ring-offset-2",
        "disabled:pointer-events-none",
        "disabled:opacity-50",
        "data-[state=checked]:border-slate-900",
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

type RadioGroupProps =
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> &
    VariantProps<typeof radioGroupVariants>;

const RadioGroup = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    RadioGroupProps
>(({ className, orientation, ...props }, ref) => (
    <RadioGroupPrimitive.Root
        ref={ref}
        orientation={orientation}
        className={radioGroupVariants({
            orientation,
            className,
        })}
        {...props}
    />
));

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

type RadioGroupItemProps =
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> &
    VariantProps<typeof radioGroupItemVariants>;

const RadioGroupItem = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    RadioGroupItemProps
>(({ className, size, ...props }, ref) => (
    <RadioGroupPrimitive.Item
        ref={ref}
        className={radioGroupItemVariants({
            size,
            className,
        })}
        {...props}
    >
        <RadioGroupPrimitive.Indicator
            className="flex items-center justify-center"
        >
            <span className="h-2 w-2 rounded-full bg-slate-900" />
        </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
));

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export {
    RadioGroup,
    RadioGroupItem,
    radioGroupVariants,
    radioGroupItemVariants,
};

export type {
    RadioGroupProps,
    RadioGroupItemProps,
};
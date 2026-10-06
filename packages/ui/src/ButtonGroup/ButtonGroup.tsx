import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { Separator } from "../Separator/Separator";

const buttonGroupVariants = cva(
    "flex w-fit items-stretch [&>*]:focus-visible:z-10",
    {
        variants: {
            orientation: {
                horizontal: "flex-row",
                vertical: "flex-col",
            },
        },
        defaultVariants: {
            orientation: "horizontal",
        },
    }
);

function ButtonGroup({
    className,
    orientation,
    ...props
}: React.ComponentProps<"div"> &
    VariantProps<typeof buttonGroupVariants>) {
    const buttonGroupClassName = [
        buttonGroupVariants({ orientation }),
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div
            role="group"
            data-slot="button-group"
            data-orientation={orientation}
            className={buttonGroupClassName}
            {...props}
        />
    );
}

function ButtonGroupText({
    className,
    asChild = false,
    ...props
}: React.ComponentProps<"div"> & {
    asChild?: boolean;
}) {
    const Comp = asChild ? Slot : "div";

    const buttonGroupTextClassName = [
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs",
        "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <Comp
            data-slot="button-group-text"
            className={buttonGroupTextClassName}
            {...props}
        />
    );
}

function ButtonGroupSeparator({
    className,
    orientation = "vertical",
    ...props
}: React.ComponentProps<typeof Separator>) {
    const buttonGroupSeparatorClassName = [
        "bg-border relative !m-0 self-stretch",
        "data-[orientation=vertical]:h-auto",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <Separator
            data-slot="button-group-separator"
            orientation={orientation}
            className={buttonGroupSeparatorClassName}
            {...props}
        />
    );
}

export {
    ButtonGroup,
    ButtonGroupSeparator,
    ButtonGroupText,
};
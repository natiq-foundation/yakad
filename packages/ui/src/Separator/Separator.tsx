import React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cva, type VariantProps } from "class-variance-authority";

const separatorVariants = cva("shrink-0 bg-border");

export interface SeparatorProps
    extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
    VariantProps<typeof separatorVariants> {
    ref?: React.Ref<React.ElementRef<typeof SeparatorPrimitive.Root>>;
}

export function Separator({
    orientation = "horizontal",
    decorative = true,
    className,
    ref,
    ...restProps
}: SeparatorProps) {
    return (
        <SeparatorPrimitive.Root
            ref={ref}
            orientation={orientation}
            decorative={decorative}
            className={separatorVariants({
                className: [
                    orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
                    className,
                ],
            })}
            {...restProps}
        />
    );
}
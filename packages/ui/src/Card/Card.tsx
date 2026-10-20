
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva(
    "relative flex w-full flex-col overflow-hidden rounded-xl",
    {
        variants: {
            variant: {
                elevated:
                    "bg-[var(--md-sys-color-surface-container-low)] shadow-sm",

                filled:
                    "bg-[var(--md-sys-color-surface-container-highest)]",

                outlined:
                    "border border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface)]",
            },
        },
        defaultVariants: {
            variant: "elevated",
        },
    }
);

type CardProps = React.ComponentProps<"div"> &
    VariantProps<typeof cardVariants>;

function Card({ className, variant, ...props }: CardProps) {
    return (
        <div
            data-slot="card"
            className={`${cardVariants({ variant })} ${className ?? ""}`}
            {...props}
        />
    );
}

function CardHeader({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-header"
            className={`grid grid-cols-[1fr_auto] items-start gap-4 p-6 ${className ?? ""}`}
            {...props}
        />
    );
}

function CardTitle({
    className,
    ...props
}: React.ComponentProps<"h3">) {
    return (
        <h3
            data-slot="card-title"
            className={`text-xl font-medium leading-7 text-[var(--md-sys-color-on-surface)] ${className ?? ""}`}
            {...props}
        />
    );
}

function CardDescription({
    className,
    ...props
}: React.ComponentProps<"p">) {
    return (
        <p
            data-slot="card-description"
            className={`mt-1 text-sm text-[var(--md-sys-color-on-surface-variant)] ${className ?? ""}`}
            {...props}
        />
    );
}

function CardContent({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-content"
            className={`px-6 pb-6 ${className ?? ""}`}
            {...props}
        />
    );
}

function CardFooter({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-footer"
            className={`flex items-center gap-2 px-6 pb-6 ${className ?? ""}`}
            {...props}
        />
    );
}

function CardAction({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-action"
            className={`col-start-2 row-span-2 row-start-1 self-start ${className ?? ""}`}
            {...props}
        />
    );
}

export {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    CardAction,
};

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Label } from "../Label/Label";
import { Separator } from "../Separator/Separator";

const fieldVariants = cva(
    "flex w-full gap-2",
    {
        variants: {
            orientation: {
                vertical: "flex-col",
                horizontal: "flex-row items-start",
                responsive: "flex-col @md:flex-row @md:items-start",
            },
        },
        defaultVariants: {
            orientation: "vertical",
        },
    }
);

const fieldLegendVariants = cva(
    "font-medium text-foreground",
    {
        variants: {
            variant: {
                legend: "text-base",
                label: "text-sm",
            },
        },
        defaultVariants: {
            variant: "legend",
        },
    }
);

type FieldProps = React.ComponentPropsWithoutRef<"div"> &
    VariantProps<typeof fieldVariants>;

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
    (
        {
            className,
            orientation,
            ...props
        },
        ref
    ) => {
        const fieldClassName = [
            fieldVariants({ orientation }),
            className,
        ]
            .filter(Boolean)
            .join(" ");

        return (
            <div
                ref={ref}
                data-slot="field"
                data-orientation={orientation}
                {...props}
                className={fieldClassName}
            />
        );
    }
);

Field.displayName = "Field";

const FieldGroup = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<"div">
>(
    (
        {
            className,
            ...props
        },
        ref
    ) => {
        const fieldGroupClassName = [
            "flex w-full flex-col gap-6",
            className,
        ]
            .filter(Boolean)
            .join(" ");

        return (
            <div
                ref={ref}
                data-slot="field-group"
                {...props}
                className={fieldGroupClassName}
            />
        );
    }
);

FieldGroup.displayName = "FieldGroup";

const FieldLabel = React.forwardRef<
    HTMLLabelElement,
    React.ComponentPropsWithoutRef<typeof Label>
>(
    (
        {
            className,
            ...props
        },
        ref
    ) => {
        const fieldLabelClassName = [
            "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
            className,
        ]
            .filter(Boolean)
            .join(" ");

        return (
            <Label
                ref={ref}
                data-slot="field-label"
                {...props}
                className={fieldLabelClassName}
            />
        );
    }
);

FieldLabel.displayName = "FieldLabel";

const FieldDescription = React.forwardRef<
    HTMLParagraphElement,
    React.ComponentPropsWithoutRef<"p">
>(
    (
        {
            className,
            ...props
        },
        ref
    ) => {
        const fieldDescriptionClassName = [
            "text-sm text-muted-foreground",
            className,
        ]
            .filter(Boolean)
            .join(" ");

        return (
            <p
                ref={ref}
                data-slot="field-description"
                {...props}
                className={fieldDescriptionClassName}
            />
        );
    }
);

FieldDescription.displayName = "FieldDescription";

type FieldErrorProps = React.ComponentPropsWithoutRef<"div"> & {
    errors?: Array<{ message?: string } | undefined>;
};

const FieldError = React.forwardRef<
    HTMLDivElement,
    FieldErrorProps
>(
    (
        {
            className,
            children,
            errors,
            ...props
        },
        ref
    ) => {
        const messages = errors
            ?.map((error) => error?.message)
            .filter(Boolean);

        if (!children && !messages?.length) {
            return null;
        }

        const fieldErrorClassName = [
            "text-sm font-medium text-destructive",
            className,
        ]
            .filter(Boolean)
            .join(" ");

        return (
            <div
                ref={ref}
                role="alert"
                data-slot="field-error"
                {...props}
                className={fieldErrorClassName}
            >
                {children}

                {messages?.length ? (
                    <ul className="mt-1 list-disc space-y-1 pl-5">
                        {messages.map((message, index) => (
                            <li key={index}>
                                {message}
                            </li>
                        ))}
                    </ul>
                ) : null}
            </div>
        );
    }
);

FieldError.displayName = "FieldError";

const FieldContent = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<"div">
>(
    (
        {
            className,
            ...props
        },
        ref
    ) => {
        const fieldContentClassName = [
            "flex flex-1 flex-col gap-1.5",
            className,
        ]
            .filter(Boolean)
            .join(" ");

        return (
            <div
                ref={ref}
                data-slot="field-content"
                {...props}
                className={fieldContentClassName}
            />
        );
    }
);

FieldContent.displayName = "FieldContent";

type FieldLegendProps = React.ComponentPropsWithoutRef<"legend"> &
    VariantProps<typeof fieldLegendVariants>;

const FieldLegend = React.forwardRef<
    HTMLLegendElement,
    FieldLegendProps
>(
    (
        {
            className,
            variant,
            ...props
        },
        ref
    ) => {
        const fieldLegendClassName = [
            fieldLegendVariants({ variant }),
            className,
        ]
            .filter(Boolean)
            .join(" ");

        return (
            <legend
                ref={ref}
                data-slot="field-legend"
                {...props}
                className={fieldLegendClassName}
            />
        );
    }
);

FieldLegend.displayName = "FieldLegend";

const FieldSet = React.forwardRef<
    HTMLFieldSetElement,
    React.ComponentPropsWithoutRef<"fieldset">
>(
    (
        {
            className,
            ...props
        },
        ref
    ) => {
        const fieldSetClassName = [
            "flex w-full min-w-0 flex-col gap-6",
            className,
        ]
            .filter(Boolean)
            .join(" ");

        return (
            <fieldset
                ref={ref}
                data-slot="field-set"
                {...props}
                className={fieldSetClassName}
            />
        );
    }
);

FieldSet.displayName = "FieldSet";

const FieldTitle = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<"div">
>(
    (
        {
            className,
            ...props
        },
        ref
    ) => {
        const fieldTitleClassName = [
            "text-sm font-medium text-foreground",
            className,
        ]
            .filter(Boolean)
            .join(" ");

        return (
            <div
                ref={ref}
                data-slot="field-title"
                {...props}
                className={fieldTitleClassName}
            />
        );
    }
);

FieldTitle.displayName = "FieldTitle";

const FieldSeparator = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<"div">
>(
    (
        {
            className,
            children,
            ...props
        },
        ref
    ) => {
        const fieldSeparatorClassName = [
            "relative -my-2 flex h-5 items-center",
            className,
        ]
            .filter(Boolean)
            .join(" ");

        return (
            <div
                ref={ref}
                data-slot="field-separator"
                {...props}
                className={fieldSeparatorClassName}
            >
                <Separator
                    orientation="horizontal"
                    className="absolute inset-0 top-1/2"
                />

                {children ? (
                    <span className="relative mx-auto bg-background px-2 text-xs text-muted-foreground">
                        {children}
                    </span>
                ) : null}
            </div>
        );
    }
);

FieldSeparator.displayName = "FieldSeparator";

export {
    Field,
    FieldLabel,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldContent,
    FieldTitle,
};
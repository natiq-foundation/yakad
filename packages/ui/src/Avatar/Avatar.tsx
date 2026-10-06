import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";

const avatarVariants = cva(
    "relative flex shrink-0 overflow-hidden rounded-full",
    {
        variants: {
            size: {
                default: "size-10",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
);

export interface AvatarProps
    extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> { }

const Avatar = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    AvatarProps
>(
    (
        {
            className,
            size,
            ...props
        },
        ref
    ) => {
        const avatarClassName = [
            avatarVariants({
                size,
            }),
            className,
        ]
            .filter(Boolean)
            .join(" ");

        return (
            <AvatarPrimitive.Root
                ref={ref}
                data-slot="avatar"
                className={avatarClassName}
                {...props}
            />
        );
    }
);

Avatar.displayName = AvatarPrimitive.Root.displayName;

export interface AvatarImageProps
    extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> { }

const AvatarImage = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Image>,
    AvatarImageProps
>(
    (
        {
            className,
            ...props
        },
        ref
    ) => {
        const avatarImageClassName = [
            "aspect-square size-full",
            className,
        ]
            .filter(Boolean)
            .join(" ");

        return (
            <AvatarPrimitive.Image
                ref={ref}
                data-slot="avatar-image"
                className={avatarImageClassName}
                {...props}
            />
        );
    }
);

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

export interface AvatarFallbackProps
    extends React.ComponentPropsWithoutRef<
        typeof AvatarPrimitive.Fallback
    > { }

const AvatarFallback = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Fallback>,
    AvatarFallbackProps
>(
    (
        {
            className,
            ...props
        },
        ref
    ) => {
        const avatarFallbackClassName = [
            "flex size-full items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground",
            className,
        ]
            .filter(Boolean)
            .join(" ");

        return (
            <AvatarPrimitive.Fallback
                ref={ref}
                data-slot="avatar-fallback"
                className={avatarFallbackClassName}
                {...props}
            />
        );
    }
);

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export {
    Avatar,
    AvatarImage,
    AvatarFallback,
};

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva, type VariantProps } from "class-variance-authority";

const navigationMenuVariants = cva(
    [
        "relative",
        "z-10",
        "flex",
        "max-w-max",
        "flex-1",
        "items-center",
        "justify-center",
    ],
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
    },
);

const navigationMenuTriggerVariants = cva([
    "group",
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-1",
    "rounded-md",
    "px-4",
    "py-2",
    "text-sm",
    "font-medium",
    "text-[var(--md-sys-color-on-surface)]",
    "outline-none",
    "transition-colors",
    "hover:bg-[var(--md-sys-color-surface-container)]",
    "focus-visible:ring-2",
    "focus-visible:ring-[var(--md-sys-color-primary)]",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "data-[state=open]:bg-[var(--md-sys-color-surface-container)]",
]);

const navigationMenuLinkVariants = cva([
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-md",
    "px-4",
    "py-2",
    "text-sm",
    "font-medium",
    "text-[var(--md-sys-color-on-surface)]",
    "outline-none",
    "transition-colors",
    "hover:bg-[var(--md-sys-color-surface-container)]",
    "focus-visible:ring-2",
    "focus-visible:ring-[var(--md-sys-color-primary)]",
    "data-[active=true]:bg-[var(--md-sys-color-secondary-container)]",
    "data-[active=true]:text-[var(--md-sys-color-on-secondary-container)]",
]);

type NavigationMenuProps =
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> &
    VariantProps<typeof navigationMenuVariants>;

const NavigationMenu = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Root>,
    NavigationMenuProps
>(({ className, orientation, ...props }, ref) => (
    <NavigationMenuPrimitive.Root
        ref={ref}
        orientation={orientation}
        className={navigationMenuVariants({
            orientation,
            className,
        })}
        {...props}
    />
));

NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.List
        ref={ref}
        className={[
            "group",
            "flex",
            "list-none",
            "items-center",
            "justify-center",
            "gap-1",
            className,
        ].filter(Boolean).join(" ")}
        {...props}
    />
));

NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>
>(({ ...props }, ref) => (
    <NavigationMenuPrimitive.Item
        ref={ref}
        {...props}
    />
));

NavigationMenuItem.displayName = NavigationMenuPrimitive.Item.displayName;

const NavigationMenuTrigger = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
        ref={ref}
        className={navigationMenuTriggerVariants({ className })}
        {...props}
    >
        {children}
        <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    </NavigationMenuPrimitive.Trigger>
));

NavigationMenuTrigger.displayName =
    NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Content
        ref={ref}
        className={[
            "absolute",
            "left-0",
            "top-full",
            "w-full",
            "md:w-auto",
            "rounded-md",
            "border",
            "border-[var(--md-sys-color-outline-variant)]",
            "bg-[var(--md-sys-color-surface-container)]",
            "text-[var(--md-sys-color-on-surface)]",
            "p-4",
            "shadow-md",
            "outline-none",
            "data-[motion=from-start]:animate-in",
            "data-[motion=from-end]:animate-in",
            "data-[motion=to-start]:animate-out",
            "data-[motion=to-end]:animate-out",
            className ?? "",
        ].join(" ")}
        {...props}
    />
));

NavigationMenuContent.displayName =
    NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Link>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Link
        ref={ref}
        className={navigationMenuLinkVariants({ className })}
        {...props}
    />
));

NavigationMenuLink.displayName = NavigationMenuPrimitive.Link.displayName;

const NavigationMenuIndicator = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Indicator
        ref={ref}
        className={[
            "top-full",
            "z-[1]",
            "flex",
            "h-1.5",
            "items-end",
            "justify-center",
            "overflow-hidden",
            "data-[state=visible]:animate-in",
            "data-[state=hidden]:animate-out",
            className ?? "",
        ].join(" ")}
        {...props}
    >
        <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-[var(--md-sys-color-secondary-container)] shadow-md" />
    </NavigationMenuPrimitive.Indicator>
));

NavigationMenuIndicator.displayName =
    NavigationMenuPrimitive.Indicator.displayName;

const NavigationMenuViewport = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Viewport
        ref={ref}
        className={[
            "origin-top-center",
            "relative",
            "mt-1.5",
            "h-[var(--radix-navigation-menu-viewport-height)]",
            "w-full",
            "overflow-hidden",
            "rounded-md",
            "border",
            "border-[var(--md-sys-color-outline-variant)]",
            "bg-[var(--md-sys-color-surface)]",
            "text-[var(--md-sys-color-on-surface)]",
            "shadow-md",
            "md:w-[var(--radix-navigation-menu-viewport-width)]",
            "data-[state=open]:animate-in",
            "data-[state=closed]:animate-out",
            className ?? "",
        ].join(" ")}
        {...props}
    />
));

NavigationMenuViewport.displayName =
    NavigationMenuPrimitive.Viewport.displayName;

export {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
    NavigationMenuIndicator,
    NavigationMenuViewport,
};

export type {
    NavigationMenuProps,
};

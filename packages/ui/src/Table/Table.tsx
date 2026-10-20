
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const tableVariants = cva(
    "w-full caption-bottom text-sm text-[var(--md-sys-color-on-surface)]",
    {
        variants: {
            size: {
                small: "[&_th]:h-8 [&_th]:px-3 [&_td]:px-3 [&_td]:py-2",
                medium: "[&_th]:h-10 [&_th]:px-4 [&_td]:px-4 [&_td]:py-3",
                large: "[&_th]:h-12 [&_th]:px-5 [&_td]:px-5 [&_td]:py-4",
            },
        },
        defaultVariants: {
            size: "medium",
        },
    },
);

type TableProps =
    React.ComponentPropsWithoutRef<"table"> &
    VariantProps<typeof tableVariants>;

const Table = React.forwardRef<HTMLTableElement, TableProps>(
    ({ className, size, ...props }, ref) => (
        <div className="relative w-full overflow-auto">
            <table
                ref={ref}
                data-slot="table"
                className={tableVariants({
                    size,
                    className,
                })}
                {...props}
            />
        </div>
    ),
);

Table.displayName = "Table";

const TableHeader = React.forwardRef<
    HTMLTableSectionElement,
    React.ComponentPropsWithoutRef<"thead">
>(({ className, ...props }, ref) => (
    <thead
        ref={ref}
        data-slot="table-header"
        className={[
            "[&_tr]:border-b",
            className ?? "",
        ].join(" ")}
        {...props}
    />
));

TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
    HTMLTableSectionElement,
    React.ComponentPropsWithoutRef<"tbody">
>(({ className, ...props }, ref) => (
    <tbody
        ref={ref}
        data-slot="table-body"
        className={[
            "[&_tr:last-child]:border-0",
            className ?? "",
        ].join(" ")}
        {...props}
    />
));

TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
    HTMLTableSectionElement,
    React.ComponentPropsWithoutRef<"tfoot">
>(({ className, ...props }, ref) => (
    <tfoot
        ref={ref}
        data-slot="table-footer"
        className={[
            "border-t border-[var(--md-sys-color-outline-variant)]",
            "bg-[var(--md-sys-color-surface-container-low)]",
            "font-medium",
            className ?? "",
        ].join(" ")}
        {...props}
    />
));

TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
    HTMLTableRowElement,
    React.ComponentPropsWithoutRef<"tr">
>(({ className, ...props }, ref) => (
    <tr
        ref={ref}
        data-slot="table-row"
        className={[
            "border-b border-[var(--md-sys-color-outline-variant)]",
            "transition-colors",
            "hover:bg-[var(--md-sys-color-surface-container-low)]",
            "data-[state=selected]:bg-[var(--md-sys-color-secondary-container)]",
            "data-[state=selected]:text-[var(--md-sys-color-on-secondary-container)]",
            className ?? "",
        ].join(" ")}
        {...props}
    />
));

TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
    HTMLTableCellElement,
    React.ComponentPropsWithoutRef<"th">
>(({ className, ...props }, ref) => (
    <th
        ref={ref}
        data-slot="table-head"
        className={[
            "text-left",
            "align-middle",
            "font-medium",
            "text-[var(--md-sys-color-on-surface-variant)]",
            "[&:has([role=checkbox])]:pr-0",
            className ?? "",
        ].join(" ")}
        {...props}
    />
));

TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
    HTMLTableCellElement,
    React.ComponentPropsWithoutRef<"td">
>(({ className, ...props }, ref) => (
    <td
        ref={ref}
        data-slot="table-cell"
        className={[
            "align-middle",
            "[&:has([role=checkbox])]:pr-0",
            className ?? "",
        ].join(" ")}
        {...props}
    />
));

TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
    HTMLTableCaptionElement,
    React.ComponentPropsWithoutRef<"caption">
>(({ className, ...props }, ref) => (
    <caption
        ref={ref}
        data-slot="table-caption"
        className={[
            "mt-4",
            "text-sm",
            "text-[var(--md-sys-color-on-surface-variant)]",
            className ?? "",
        ].join(" ")}
        {...props}
    />
));

TableCaption.displayName = "TableCaption";

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
    tableVariants,
};

export type {
    TableProps,
};

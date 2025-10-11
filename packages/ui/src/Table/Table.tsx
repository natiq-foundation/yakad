import { forwardRef } from "react";
import classNames from "classnames";
import styles from "./Table.module.css";

export interface TableProps
    extends React.TableHTMLAttributes<HTMLTableElement> {
    children?: React.ReactNode;
}
export const Table = forwardRef<HTMLTableElement, TableProps>(function Table(
    { className, children, ...restProps },
    ref
) {
    const joinedClassNames = classNames(
        { fullWidthOnParentDemand: true },
        styles.table,
        className
    );

    return (
        <table ref={ref} {...restProps} className={joinedClassNames}>
            {children}
        </table>
    );
});

export interface TheadProps
    extends React.HTMLAttributes<HTMLTableSectionElement> {
    children?: React.ReactNode;
}
export const Thead = forwardRef<HTMLTableSectionElement, TheadProps>(
    function Thead({ className, children, ...restProps }, ref) {
        const joinedClassNames = classNames(styles.thead, className);

        return (
            <thead ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </thead>
        );
    }
);

export interface TbodyProps
    extends React.HTMLAttributes<HTMLTableSectionElement> {
    children?: React.ReactNode;
}
export const Tbody = forwardRef<HTMLTableSectionElement, TbodyProps>(
    function Tbody({ className, children, ...restProps }, ref) {
        const joinedClassNames = classNames(styles.tbody, className);

        return (
            <tbody ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </tbody>
        );
    }
);

export interface TfootProps
    extends React.HTMLAttributes<HTMLTableSectionElement> {
    children?: React.ReactNode;
}
export const Tfoot = forwardRef<HTMLTableSectionElement, TfootProps>(
    function Tfoot({ className, children, ...restProps }, ref) {
        const joinedClassNames = classNames(styles.tfoot, className);

        return (
            <tfoot ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </tfoot>
        );
    }
);

export interface TrProps extends React.HTMLAttributes<HTMLTableRowElement> {
    children?: React.ReactNode;
}
export const Tr = forwardRef<HTMLTableRowElement, TrProps>(function Tr(
    { className, children, ...restProps },
    ref
) {
    const joinedClassNames = classNames(styles.tr, className);

    return (
        <tr ref={ref} {...restProps} className={joinedClassNames}>
            {children}
        </tr>
    );
});

export interface ThProps extends React.HTMLAttributes<HTMLTableCellElement> {
    children?: React.ReactNode;
}
export const Th = forwardRef<HTMLTableCellElement, ThProps>(function Th(
    { className, children, ...restProps },
    ref
) {
    const joinedClassNames = classNames(styles.th, className);

    return (
        <th ref={ref} {...restProps} className={joinedClassNames}>
            {children}
        </th>
    );
});

export interface TdProps extends React.HTMLAttributes<HTMLTableCellElement> {
    children?: React.ReactNode;
}
export const Td = forwardRef<HTMLTableCellElement, TdProps>(function Td(
    { className, children, ...restProps },
    ref
) {
    const joinedClassNames = classNames(styles.td, className);

    return (
        <td ref={ref} {...restProps} className={joinedClassNames}>
            {children}
        </td>
    );
});

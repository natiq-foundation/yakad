import classNames from "classnames";
import boxingStyles from "../boxing.module.css";
import styles from "./Table.module.css";

export interface TableProps
    extends React.TableHTMLAttributes<HTMLTableElement> {
    children?: React.ReactNode;
}
export function Table({
         className, children,
        ref,
        ...restProps
    }: TableProps & { ref?: React.Ref<HTMLTableElement> }) {
    const joinedClassNames = classNames(
        { [boxingStyles.fullWidthOnParentDemand]: true },
        styles.table,
        className
    );

    return (
        <table ref={ref} {...restProps} className={joinedClassNames}>
            {children}
        </table>
    );
}

export interface TheadProps
    extends React.HTMLAttributes<HTMLTableSectionElement> {
    children?: React.ReactNode;
}
export function Thead({
         className, children,
        ref,
        ...restProps
    }: TheadProps & { ref?: React.Ref<HTMLTableSectionElement> }) {
        const joinedClassNames = classNames(styles.thead, className);

        return (
            <thead ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </thead>
        );
    }

export interface TbodyProps
    extends React.HTMLAttributes<HTMLTableSectionElement> {
    children?: React.ReactNode;
}
export function Tbody({
         className, children,
        ref,
        ...restProps
    }: TbodyProps & { ref?: React.Ref<HTMLTableSectionElement> }) {
        const joinedClassNames = classNames(styles.tbody, className);

        return (
            <tbody ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </tbody>
        );
    }

export interface TfootProps
    extends React.HTMLAttributes<HTMLTableSectionElement> {
    children?: React.ReactNode;
}
export function Tfoot({
         className, children, 
        ref,
        ...restProps
    }: TfootProps & { ref?: React.Ref<HTMLTableSectionElement> }) {
        const joinedClassNames = classNames(styles.tfoot, className);

        return (
            <tfoot ref={ref} {...restProps} className={joinedClassNames}>
                {children}
            </tfoot>
        );
    }

export interface TrProps extends React.HTMLAttributes<HTMLTableRowElement> {
    children?: React.ReactNode;
}
export function Tr({
         className, children, 
        ref,
        ...restProps
    }: TrProps & { ref?: React.Ref<HTMLTableRowElement> }) {
    const joinedClassNames = classNames(styles.tr, className);

    return (
        <tr ref={ref} {...restProps} className={joinedClassNames}>
            {children}
        </tr>
    );
}

export interface ThProps extends React.HTMLAttributes<HTMLTableCellElement> {
    children?: React.ReactNode;
}
export function Th({
         className, children, 
        ref,
        ...restProps
    }: ThProps & { ref?: React.Ref<HTMLTableCellElement> }) {
    const joinedClassNames = classNames(styles.th, className);

    return (
        <th ref={ref} {...restProps} className={joinedClassNames}>
            {children}
        </th>
    );
}

export interface TdProps extends React.HTMLAttributes<HTMLTableCellElement> {
    children?: React.ReactNode;
}
export function Td({
         className, children, 
        ref,
        ...restProps
    }: TdProps & { ref?: React.Ref<HTMLTableCellElement> }) {
    const joinedClassNames = classNames(styles.td, className);

    return (
        <td ref={ref} {...restProps} className={joinedClassNames}>
            {children}
        </td>
    );
}

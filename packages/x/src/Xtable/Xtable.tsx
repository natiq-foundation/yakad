"use client";

import { Table, TableProps } from "@yakad/ui";

export interface XTableProps extends TableProps {}

export function XTable({
    children,
    ref,
    ...restProps
}: XTableProps & { ref?: React.Ref<HTMLTableElement> }) {
    return (
        <Table ref={ref} {...restProps}>
            {children}
        </Table>
    );
}

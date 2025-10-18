"use client";

import { Children, ReactElement, useState } from "react";
import { Button, Row, Spacer, Th, Thead, TheadProps, Tr } from "@yakad/ui";
import { Symbol } from "@yakad/symbols";
import { XTrProps, XThProps } from "./Xtrhdf";
import styles from "./Xtable.module.css";

interface Sort {
    index: number;
    order: "ASC" | "DESC";
}
interface Search {
    index: number;
    phrase: string;
}
export interface XTheadProps extends TheadProps {
    children: ReactElement<XTrProps>;
}

export function XThead({
    children,
    ref,
    ...restProps
}: XTheadProps & { ref?: React.Ref<HTMLTableSectionElement> }) {
    const [sort, setSort] = useState<Sort>();
    const [search, setSearch] = useState<Search>();

    const setSortHandler = (index: number) => {
        sort && sort.index == index
            ? sort.order == "ASC"
                ? setSort({ index: index, order: "DESC" })
                : setSort({ index: index, order: "ASC" })
            : setSort({ index: index, order: "ASC" });
    };

    const ChildXTr: ReactElement<XTrProps> = children;

    const ChildsXTh = Children.toArray(ChildXTr.props.children);

    return (
        <Thead ref={ref} {...restProps}>
            <Tr {...ChildXTr.props}>
                {(ChildsXTh as ReactElement<XThProps>[]).map(
                    (ChildAsXTh: ReactElement<XThProps>, index: number) => (
                        <Th key={index} {...ChildAsXTh.props}>
                            <Row className={styles.xthRow}>
                                <div>{ChildAsXTh.props.children}</div>
                                {ChildAsXTh.props.sortable && (
                                    <Button
                                        className={
                                            sort && sort.index != index
                                                ? styles.showOnHover
                                                : ""
                                        }
                                        size="small"
                                        icon={
                                            <Symbol
                                                icon="sort"
                                                mirror={
                                                    sort &&
                                                    sort.index == index &&
                                                    sort.order == "DESC"
                                                        ? undefined
                                                        : "horizontal"
                                                }
                                            />
                                        }
                                        onClick={() =>
                                            setSortHandler(index)
                                        }
                                    />
                                )}
                                {ChildAsXTh.props.searchable && (
                                    <Button
                                        className={
                                            search && search.index != index
                                                ? styles.showOnHover
                                                : ""
                                        }
                                        size="small"
                                        icon={<Symbol icon="search" />}
                                        onClick={() =>
                                            setSearch({
                                                index: index,
                                                phrase: "test",
                                            })
                                        }
                                    />
                                )}
                                <Spacer />
                                <Button
                                    className={styles.showOnHover}
                                    size="small"
                                    icon={<Symbol icon="more_vert" />}
                                />
                            </Row>
                        </Th>
                    )
                )}
            </Tr>
        </Thead>
    );
}

"use client";

import { useState } from "react";
import { Button, List, ListItem, ListProps, Spacer } from "@yakad/ui";

interface MenuItem {
    name: string;
    onClick?: () => void;
    childs?: Omit<MenuItem, "childs">[];
    selected?: boolean;
}

export interface XmenuListProps extends Omit<ListProps, "children"> {
    items: MenuItem[];
    ref?: React.Ref<HTMLUListElement>;
}

export function XmenuList({
    items,
    direction = "column",
    ref,
    ...restProps
}: XmenuListProps) {
    const [collapsedList, setCollapsedList] = useState<{
        [n: number]: boolean;
    }>({});

    const handleClickcollapseList = (index: number) =>
        setCollapsedList((prev) => ({
            ...prev,
            [index]: prev[index] ? !prev[index] : true,
        }));

    return (
        <List ref={ref} direction={direction} {...restProps}>
            {items.map((item, index) => (
                <ListItem key={index}>
                    <Button
                        variant={
                            item.selected
                                ? "filled"
                                : collapsedList[index]
                                ? "elevated"
                                : "text"
                        }
                        borderStyle="semi"
                        onClick={
                            item.childs
                                ? () => handleClickcollapseList(index)
                                : item.onClick
                        }
                    >
                        {item.name}
                        <Spacer />
                    </Button>
                    <List
                        key={index}
                        direction="column"
                        collapsed={!collapsedList[index]}
                        style={{
                            marginInlineStart: "1rem",
                            marginBottom: "0.5rem",
                            borderInlineStart: "0.1rem solid #72727272",
                        }}
                    >
                        {item.childs?.map((child, childIndex) => (
                            <ListItem key={childIndex}>
                                <Button
                                    size="small"
                                    borderStyle="semi"
                                    variant={child.selected ? "filled" : "text"}
                                    onClick={child.onClick}
                                >
                                    {child.name}
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                </ListItem>
            ))}
        </List>
    );
}

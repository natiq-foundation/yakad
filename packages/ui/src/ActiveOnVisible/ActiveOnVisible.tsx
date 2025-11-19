"use client";

import { useImperativeHandle, useRef, useState } from "react";
import { Stack, StackProps } from "..";
import { useOnVisibilityChange } from "@yakad/use-interactions";

export interface ActiveOnVisibleProps extends StackProps {
    onVisibilityChange?: (visible: boolean) => void;
    ref?: React.Ref<HTMLDivElement>;
}

export function ActiveOnVisible({
    onVisibilityChange,
    style,
    children,
    ref,
    ...restProps
}: ActiveOnVisibleProps) {
    const localRef = useRef<HTMLDivElement | null>(null);
    const [boxHeight, setBoxHeight] = useState<number>(0);
    // const isVisible = boxHeight === 0;

    // Let the parent access our DOM node
    useImperativeHandle(ref, () => localRef.current as HTMLDivElement);

    useOnVisibilityChange((visible: boolean) => {
        onVisibilityChange?.(visible);
        if (visible) {
            setBoxHeight(0);
        } else {
            const boxRect = localRef.current?.getBoundingClientRect();
            setBoxHeight(boxRect!.height);
        }
    }, localRef);

    return (
        <Stack
            ref={localRef}
            {...restProps}
            style={{ height: boxHeight || "auto", ...style }}
        >
            {/* <Activity mode={isVisible ? "visible" : "hidden"}> */}
            {children}
            {/* </Activity> */}
        </Stack>
    );
}

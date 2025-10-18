"use client";

import React, { useEffect, useRef, useState } from "react";
import { ActiveOnVisible, Stack, StackProps, useOnVisibilityChange } from "..";

export interface RenderByScrollProps extends StackProps {
    scrollMarginTop?: number;
    extraRender?: number;
    jumpToIndex?: number;
    stopNewRenders?: boolean;
    newChildRendered?: (index: number) => void;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLDivElement>
}

export function RenderByScroll({
        scrollMarginTop = 8, // Sticky Header Height
            extraRender = 5,
            jumpToIndex = 0,
            stopNewRenders,
            newChildRendered,
            style,
            children,
        ref,
        ...restProps
    }: RenderByScrollProps) {
        const childrenArray = React.Children.toArray(children);

        // Scroll Zone
        const childRefs = useRef<Record<number, HTMLElement | null>>({});
        const scrollTo = (i: number, smooth?: boolean) =>
            childRefs.current[i]?.scrollIntoView({
                behavior: smooth ? "smooth" : "auto",
            });

        // Collect Visibled Childs
        const [visibled, setVisibled] = useState<{
            lowest: number;
            highest: number;
        }>({ lowest: jumpToIndex, highest: jumpToIndex });
        const handleOnVisible = (i: number) => {
            if (i < visibled.lowest) setVisibled({ ...visibled, lowest: i });
            if (i > visibled.highest) setVisibled({ ...visibled, highest: i });
        };

        // Collect Rendered Childs
        const [rendered, setRendered] = useState<{
            lowest: number;
            highest: number;
        }>({ lowest: jumpToIndex, highest: jumpToIndex });
        const overRenderedOnLowSide = visibled.lowest - rendered.lowest;
        const overRenderedOnHighSide = rendered.highest - visibled.highest;

        // Is Visible Loading Box
        const [isVisibleLowSideLimitSensor, setIsVisibleLowSideLimitSensor] =
            useState<boolean>(false);

        // Render new Childs if needed
        useEffect(() => {
            const isPriorityBYHighSide =
                overRenderedOnHighSide < 1 ||
                overRenderedOnHighSide - 1 <= overRenderedOnLowSide;
            const isHighSideNewRenderRemains =
                rendered.highest < childrenArray.length - 1;
            const isLowSideNewRenderRemains = rendered.lowest > 0;
            if (!stopNewRenders) {
                if (
                    isPriorityBYHighSide &&
                    isHighSideNewRenderRemains &&
                    overRenderedOnHighSide < extraRender
                ) {
                    const newHigh = rendered.highest + 1;
                    setRendered({ ...rendered, highest: newHigh });
                    newChildRendered?.(newHigh);
                } else {
                    if (
                        isLowSideNewRenderRemains &&
                        overRenderedOnLowSide < extraRender
                    ) {
                        if (isVisibleLowSideLimitSensor) {
                            scrollTo(rendered.lowest);
                        }
                        const newLow = rendered.lowest - 1;
                        setRendered({ ...rendered, lowest: newLow });
                        newChildRendered?.(newLow);
                    }
                }
            }
            // eslint-disable-next-line
        }, [visibled, rendered, extraRender, stopNewRenders]);

        // Scroll to jumpToIndex
        useEffect(() => {
            const isJumpToIndexOutOfRenderedRange =
                jumpToIndex < rendered.lowest || jumpToIndex > rendered.highest;
            if (isJumpToIndexOutOfRenderedRange) {
                setVisibled({ lowest: jumpToIndex, highest: jumpToIndex });
                setRendered({ lowest: jumpToIndex, highest: jumpToIndex });
            }
            const timeout = setTimeout(() => {
                scrollTo(jumpToIndex, true);
            }, 100);
            return () => clearTimeout(timeout);
            // eslint-disable-next-line
        }, [jumpToIndex]);

        const onvisibRef = useOnVisibilityChange<HTMLDivElement>((visible) => {
            setIsVisibleLowSideLimitSensor(visible);
        });

        return (
            <Stack
                ref={ref}
                {...restProps}
                style={{ minHeight: "100vh", ...style }}
            >
                {rendered.lowest > 0 && (
                    <div
                        ref={onvisibRef}
                        style={{
                            marginBottom: `${scrollMarginTop}rem`,
                        }}
                    />
                )}
                {childrenArray.map(
                    (child, i) =>
                        i >= rendered.lowest &&
                        i <= rendered.highest && (
                            <ActiveOnVisible
                                key={i}
                                ref={(el) => {
                                    childRefs.current[i] = el;
                                }}
                                style={{
                                    scrollMarginTop: `${scrollMarginTop}rem`,
                                }}
                                onVisibilityChange={(visible) => {
                                    visible && handleOnVisible(i);
                                }}
                            >
                                {child}
                            </ActiveOnVisible>
                        )
                )}
            </Stack>
        );
    }

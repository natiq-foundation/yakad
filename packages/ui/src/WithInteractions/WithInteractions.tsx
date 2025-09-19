"use client";

import { mergeRefs } from "@yakad/lib";
import {
    cloneElement,
    forwardRef,
    isValidElement,
    useEffect,
    useImperativeHandle,
    useRef,
} from "react";

export interface WithInteractionsProps {
    onRightClick?: (e: MouseEvent) => void;
    onTap?: (e: TouchEvent) => void;
    onDoubleTap?: (e: TouchEvent) => void;
    onOutsideClick?: () => void;

    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    onSwipeUp?: () => void;
    onSwipeDown?: () => void;

    onPinchIn?: () => void;
    onPinchOut?: () => void;
    onRotate?: (angle: number) => void;

    onScrollStart?: () => void;
    onScrollStop?: () => void;

    onResize?: (entry: ResizeObserverEntry) => void;
    onVisibile?: () => void;
    onHidden?: () => void;
    onMouseHoverStart?: (e: MouseEvent) => void;
    onMouseHoverLeave?: (e: MouseEvent) => void;

    children?: React.ReactElement;
}

export const WithInteractions = forwardRef<HTMLElement, WithInteractionsProps>(
    (
        {
            children,
            onRightClick,
            onTap,
            onDoubleTap,
            onOutsideClick,
            onSwipeLeft,
            onSwipeRight,
            onSwipeUp,
            onSwipeDown,
            onPinchIn,
            onPinchOut,
            onRotate,
            onScrollStart,
            onScrollStop,
            onResize,
            onVisibile,
            onHidden,
            onMouseHoverStart,
            onMouseHoverLeave,
            ...restProps
        },
        forwardedRef
    ) => {
        const localRef = useRef<HTMLElement>(null);

        // Let the parent access our DOM node
        useImperativeHandle(
            forwardedRef,
            () => localRef.current as HTMLElement
        );

        useEffect(() => {
            const el = localRef.current;
            if (!el) return;

            // Event cleanup store
            const cleanupFns: (() => void)[] = [];

            // === RIGHT CLICK ===
            if (onRightClick) {
                const handler = (e: MouseEvent) => {
                    e.preventDefault();
                    onRightClick(e);
                };
                el.addEventListener("contextmenu", handler);
                cleanupFns.push(() =>
                    el.removeEventListener("contextmenu", handler)
                );
            }

            // === OUTSIDE CLICK ===
            if (onOutsideClick) {
                const handler = (e: MouseEvent) => {
                    if (!el.contains(e.target as Node)) {
                        onOutsideClick();
                    }
                };
                document.addEventListener("click", handler);
                cleanupFns.push(() =>
                    document.removeEventListener("click", handler)
                );
            }

            // === TAP & DOUBLE TAP ===
            if (onTap || onDoubleTap) {
                let lastTap = 0;
                const tapHandler = (e: TouchEvent) => {
                    const now = Date.now();
                    if (now - lastTap < 300) {
                        onDoubleTap?.(e);
                    } else {
                        onTap?.(e);
                    }
                    lastTap = now;
                };
                el.addEventListener("touchend", tapHandler);
                cleanupFns.push(() =>
                    el.removeEventListener("touchend", tapHandler)
                );
            }

            // === SWIPE ===
            if (onSwipeLeft || onSwipeRight || onSwipeUp || onSwipeDown) {
                let startX = 0,
                    startY = 0,
                    endX = 0,
                    endY = 0;

                const touchStart = (e: TouchEvent) => {
                    const t = e.touches[0];
                    startX = t.clientX;
                    startY = t.clientY;
                    endX = startX;
                    endY = startY;
                };

                const touchMove = (e: TouchEvent) => {
                    const t = e.touches[0];
                    endX = t.clientX;
                    endY = t.clientY;
                };

                const touchEnd = () => {
                    const dx = endX - startX;
                    const dy = endY - startY;
                    const absDx = Math.abs(dx);
                    const absDy = Math.abs(dy);
                    const threshold = 30;

                    if (absDx > absDy) {
                        if (dx > threshold) onSwipeRight?.();
                        if (dx < -threshold) onSwipeLeft?.();
                    } else {
                        if (dy > threshold) onSwipeDown?.();
                        if (dy < -threshold) onSwipeUp?.();
                    }
                };

                el.addEventListener("touchstart", touchStart);
                el.addEventListener("touchmove", touchMove);
                el.addEventListener("touchend", touchEnd);

                cleanupFns.push(() => {
                    el.removeEventListener("touchstart", touchStart);
                    el.removeEventListener("touchmove", touchMove);
                    el.removeEventListener("touchend", touchEnd);
                });
            }

            // === PINCH & ROTATE ===
            if (onPinchIn || onPinchOut || onRotate) {
                let startDistance = 0;
                let startAngle = 0;

                const getDistance = (t1: Touch, t2: Touch) =>
                    Math.hypot(
                        t2.clientX - t1.clientX,
                        t2.clientY - t1.clientY
                    );
                const getAngle = (t1: Touch, t2: Touch) =>
                    Math.atan2(
                        t2.clientY - t1.clientY,
                        t2.clientX - t1.clientX
                    ) *
                    (180 / Math.PI);

                const handleStart = (e: TouchEvent) => {
                    if (e.touches.length === 2) {
                        const [t1, t2] = e.touches;
                        startDistance = getDistance(t1, t2);
                        startAngle = getAngle(t1, t2);
                    }
                };

                const handleMove = (e: TouchEvent) => {
                    if (e.touches.length === 2) {
                        const [t1, t2] = e.touches;
                        const dist = getDistance(t1, t2);
                        const angle = getAngle(t1, t2);

                        if (dist < startDistance - 20) onPinchIn?.();
                        if (dist > startDistance + 20) onPinchOut?.();

                        const deltaAngle = angle - startAngle;
                        if (Math.abs(deltaAngle) > 15) {
                            onRotate?.(deltaAngle);
                        }
                    }
                };

                el.addEventListener("touchstart", handleStart);
                el.addEventListener("touchmove", handleMove);
                cleanupFns.push(() => {
                    el.removeEventListener("touchstart", handleStart);
                    el.removeEventListener("touchmove", handleMove);
                });
            }

            // === RESIZE OBSERVER ===
            let resizeObserver: ResizeObserver | null = null;
            if (onResize) {
                resizeObserver = new ResizeObserver((entries) => {
                    for (const entry of entries) {
                        onResize(entry);
                    }
                });
                resizeObserver.observe(el);
                cleanupFns.push(() => resizeObserver?.disconnect());
            }

            // === VISIBILITY OBSERVER ===
            let intersectionObserver: IntersectionObserver | null = null;
            if (onVisibile || onHidden) {
                intersectionObserver = new IntersectionObserver((entries) => {
                    entries[0].isIntersecting ? onVisibile?.() : onHidden?.();
                });
                intersectionObserver.observe(el);
                cleanupFns.push(() => intersectionObserver?.disconnect());
            }

            // === On Hover Change ===
            const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
            if (hasFinePointer && (onMouseHoverStart || onMouseHoverLeave)) {
                const mouseEnter = (e: MouseEvent) => onMouseHoverStart?.(e);
                const mouseLeave = (e: MouseEvent) => onMouseHoverLeave?.(e);
                el.addEventListener("mouseenter", mouseEnter);
                el.addEventListener("mouseleave", mouseLeave);
                cleanupFns.push(() => {
                    el.removeEventListener("mouseenter", mouseEnter);
                    el.removeEventListener("mouseleave", mouseLeave);
                });
            }

            // === SCROLL START/END ===
            if (onScrollStart) {
                let scrolling = false;
                let scrollTimeout: NodeJS.Timeout;

                const scrollHandler = () => {
                    if (!scrolling) {
                        scrolling = true;
                        onScrollStart?.();
                    }
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(() => {
                        scrolling = false;
                        onScrollStop?.();
                    }, 150);
                };

                el.addEventListener("scroll", scrollHandler);
                cleanupFns.push(() =>
                    el.removeEventListener("scroll", scrollHandler)
                );
            }

            // Cleanup on unmount
            return () => {
                cleanupFns.forEach((fn) => fn());
            };
        }, [
            onRightClick,
            onTap,
            onDoubleTap,
            onOutsideClick,
            onSwipeLeft,
            onSwipeRight,
            onSwipeUp,
            onSwipeDown,
            onPinchIn,
            onPinchOut,
            onRotate,
            onScrollStart,
            onScrollStop,
            onResize,
            onVisibile,
            onHidden,
            onMouseHoverStart,
            onMouseHoverLeave,
        ]);

        if (!isValidElement(children)) return null;

        return cloneElement(children as React.ReactElement<any, any>, {
            ...restProps,
            ref: mergeRefs(
                localRef,
                forwardedRef,
                (children as any).props?.ref
            ),
        });
    }
);
WithInteractions.displayName = "WithInteractions";

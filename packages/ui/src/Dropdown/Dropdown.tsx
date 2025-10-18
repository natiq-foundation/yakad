"use client";

import {
    useRef,
    useState,
    useEffect,
    useImperativeHandle,
} from "react";
import classNames from "classnames";
import { Card, CardProps, OverlayProps, useOnOutsideClick } from "..";
import styles from "./Dropdown.module.css";

export interface DropdownProps extends CardProps, OverlayProps {
    ref?: React.Ref<HTMLDivElement>;
}

export function Dropdown({
    fullWidthOnParentDemand = false, // Def in Card is True
    blur,
    level = "high",
    triggerref,
    onClose,
    className,
    style,
    children,
    ref,
    ...restProps
}: DropdownProps) {
    const fallbackTriggerRef = useRef<HTMLDivElement | null>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const placementTargetRef = triggerref || fallbackTriggerRef;

    // Let the parent access our DOM node
    useImperativeHandle(
        ref,
        () => dropdownRef.current as HTMLDivElement
    );

    const [arrowPosition, setArrowPosition] = useState<{
        top: number;
        left: number;
    }>({
        top: 0,
        left: 0,
    });
    const [dropdownPosition, setDropdownPosition] = useState<{
        top: number;
        left: number;
    }>({
        top: 0,
        left: 0,
    });

    const [isPlacedAbove, setIsPlacedAbove] = useState<boolean>(false);
    const [isPlaced, setIsPlaced] = useState<boolean>(false);

    useEffect(() => {
        if (placementTargetRef?.current && dropdownRef.current) {
            const placementTarget =
                placementTargetRef.current.getBoundingClientRect();
            const dropdownRect =
                dropdownRef.current.getBoundingClientRect();
            const padding = 10;

            let dropdownY = placementTarget.bottom + padding;
            let dropdownXPos =
                placementTarget.left + placementTarget.width / 2;
            let arrowY = dropdownY;
            const arrowX = dropdownXPos;

            // Prevent overflow bottom
            if (
                dropdownY + dropdownRect.height > window.innerHeight &&
                placementTarget.top > dropdownRect.height
            ) {
                dropdownY = placementTarget.top - padding;
                arrowY = placementTarget.top - padding;
                setIsPlacedAbove(true);
            } else setIsPlacedAbove(false);

            // Prevent overflow right
            if (
                dropdownXPos + dropdownRect.width / 2 >
                window.innerWidth - padding
            ) {
                dropdownXPos =
                    window.innerWidth - dropdownRect.width / 2 - padding;
            }

            // Prevent overflow left
            if (dropdownXPos - dropdownRect.width / 2 < padding) {
                dropdownXPos = dropdownRect.width / 2 + padding;
            }

            setDropdownPosition({
                top: dropdownY,
                left: dropdownXPos,
            });

            setArrowPosition({
                top: arrowY,
                left: arrowX,
            });

            setIsPlaced(true);
        }
    }, [children, placementTargetRef]);

    useOnOutsideClick(() => {
        onClose?.();
    }, dropdownRef);

    return (
        <>
            {!triggerref && <div ref={fallbackTriggerRef} />}
            <Card
                ref={dropdownRef}
                fullWidthOnParentDemand={fullWidthOnParentDemand}
                blur={blur}
                level={level}
                {...restProps}
                className={classNames(
                    styles.dropdownCard,
                    { [styles.isPlacedAbove]: isPlacedAbove },
                    className
                )}
                style={{
                    top: dropdownPosition.top,
                    left: dropdownPosition.left,
                    visibility: isPlaced ? "visible" : "hidden",
                    ...style,
                }}
            >
                {children}
            </Card>
            <span
                className={classNames(
                    styles.arrow,
                    {
                        [styles.isPlacedAbove]: isPlacedAbove,
                    },
                    { [styles.blur]: blur }
                )}
                style={{
                    top: arrowPosition.top,
                    left: arrowPosition.left,
                    visibility: isPlaced ? "visible" : "hidden",
                }}
            />
        </>
    );
}

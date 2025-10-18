"use client";

import {
    useState,
    cloneElement,
    useEffect,
    useRef,
    RefObject,
    useImperativeHandle,
} from "react";
import { createPortal } from "react-dom";
import {
    Dropdown,
    DropdownProps,
    Popup,
    PopupProps,
    Stack,
    StackProps,
    useOnRightClick,
} from "..";

export interface OverlayProps {
    triggerref?: RefObject<HTMLElement | null>;
    onClose?: () => void;
}
type AllowedOverlays =
    | React.ReactElement<PopupProps, typeof Popup>
    | React.ReactElement<DropdownProps, typeof Dropdown>;

export interface WithOverlayProps extends StackProps {
    trigger?: "onClick" | "onRightClick";
    overlay?: AllowedOverlays;
    children?: React.ReactElement;
    ref?: React.Ref<HTMLDivElement>;
}

export function WithOverlay({
    trigger = "onClick",
    overlay,
    children,
    onClick,
    ref,
    ...restProps
}: WithOverlayProps) {
        // Get Triggers ref and send to Overlay
        const localRef = useRef<HTMLDivElement | null>(null);
        const [showOverlay, setShowOverlay] = useState(false);

        useOnRightClick(() => {
            setShowOverlay(true);
        }, localRef);

        const onClickHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
            trigger === "onClick" && setShowOverlay((prev) => !prev);
            onClick?.(e);
        };

    // Let the parent access our DOM node
    useImperativeHandle(
        ref,
        () => localRef.current as HTMLDivElement
    );

    // Disable Body Scroll on showOverlay
    useEffect(() => {
        document.body.style.overflow = showOverlay ? "hidden" : "initial";
        return () => {
            document.body.style.overflow = "initial";
        };
    }, [showOverlay]);

    // Teleport Overlay to portalRoot or body
    const portalRoot =
        document.getElementsByClassName("portalRoot")[0] || document;
    const teleport =
        overlay &&
        portalRoot &&
        createPortal(
            cloneElement(overlay, {
                triggerref: localRef,
                onClose: () => {
                    overlay.props.onClose?.();
                    setShowOverlay(false);
                },
            }),
            portalRoot
        );

    return (
        <>
            <Stack ref={localRef} {...restProps} onClick={onClickHandler}>
                {children}
            </Stack>
            {showOverlay && teleport}
        </>
    );
}

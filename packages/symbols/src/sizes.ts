export type IconSizeKey =
    | "extraSmall"
    | "small"
    | "medium"
    | "large"
    | "extraLarge";

export const MATERIAL_ICON_SIZE_MAP: Record<IconSizeKey, number> = {
    extraSmall: 16,
    small: 20,
    medium: 24,
    large: 40,
    extraLarge: 48,
};

export function resolveIconSize(size: number | IconSizeKey): number {
    return typeof size === "number" ? size : MATERIAL_ICON_SIZE_MAP[size];
}

export function resolveOpticalSize(pxSize: number): 20 | 24 | 40 | 48 {
    const steps: Array<20 | 24 | 40 | 48> = [20, 24, 40, 48];
    return steps.reduce((closest, step) =>
        Math.abs(step - pxSize) < Math.abs(closest - pxSize) ? step : closest
    );
}
export function hexToArgb(hex: string): number {
    const normalized = hex.replace("#", "");

    if (normalized.length !== 6) {
        throw new Error("Invalid hex color");
    }

    return parseInt(`ff${normalized}`, 16);
}
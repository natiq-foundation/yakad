import type { ColorRoles } from "./roles";

export function createColorTokens(roles: ColorRoles) {
    return {
        "primary": roles.primary,
        "on-primary": roles.onPrimary,
        "primary-container": roles.primaryContainer,
        "on-primary-container": roles.onPrimaryContainer,
        "primary-fixed": roles.primaryFixed,
        "primary-fixed-dim": roles.primaryFixedDim,
        "on-primary-fixed": roles.onPrimaryFixed,
        "on-primary-fixed-variant": roles.onPrimaryFixedVariant,

        "secondary": roles.secondary,
        "on-secondary": roles.onSecondary,
        "secondary-container": roles.secondaryContainer,
        "on-secondary-container": roles.onSecondaryContainer,
        "secondary-fixed": roles.secondaryFixed,
        "secondary-fixed-dim": roles.secondaryFixedDim,
        "on-secondary-fixed": roles.onSecondaryFixed,
        "on-secondary-fixed-variant": roles.onSecondaryFixedVariant,

        "tertiary": roles.tertiary,
        "on-tertiary": roles.onTertiary,
        "tertiary-container": roles.tertiaryContainer,
        "on-tertiary-container": roles.onTertiaryContainer,
        "tertiary-fixed": roles.tertiaryFixed,
        "tertiary-fixed-dim": roles.tertiaryFixedDim,
        "on-tertiary-fixed": roles.onTertiaryFixed,
        "on-tertiary-fixed-variant": roles.onTertiaryFixedVariant,

        "error": roles.error,
        "on-error": roles.onError,
        "error-container": roles.errorContainer,
        "on-error-container": roles.onErrorContainer,

        "background": roles.background,
        "on-background": roles.onBackground,

        "surface": roles.surface,
        "on-surface": roles.onSurface,
        "surface-variant": roles.surfaceVariant,
        "on-surface-variant": roles.onSurfaceVariant,
        "surface-dim": roles.surfaceDim,
        "surface-bright": roles.surfaceBright,
        "surface-container-lowest": roles.surfaceContainerLowest,
        "surface-container-low": roles.surfaceContainerLow,
        "surface-container": roles.surfaceContainer,
        "surface-container-high": roles.surfaceContainerHigh,
        "surface-container-highest": roles.surfaceContainerHighest,

        "outline": roles.outline,
        "outline-variant": roles.outlineVariant,

        "inverse-surface": roles.inverseSurface,
        "inverse-on-surface": roles.inverseOnSurface,
        "inverse-primary": roles.inversePrimary,

        "surface-tint": roles.surfaceTint,
        "shadow": roles.shadow,
        "scrim": roles.scrim,
    };
}
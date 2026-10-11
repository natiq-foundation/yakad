import { hexFromArgb, SchemeExpressive } from "@material/material-color-utilities";
import { darkScheme, lightScheme } from "./scheme";

export interface ColorRoles {
    primary: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    primaryFixed: string;
    primaryFixedDim: string;
    onPrimaryFixed: string;
    onPrimaryFixedVariant: string;

    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    secondaryFixed: string;
    secondaryFixedDim: string;
    onSecondaryFixed: string;
    onSecondaryFixedVariant: string;

    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
    tertiaryFixed: string;
    tertiaryFixedDim: string;
    onTertiaryFixed: string;
    onTertiaryFixedVariant: string;

    error: string;
    onError: string;
    errorContainer: string;
    onErrorContainer: string;

    background: string;
    onBackground: string;

    surface: string;
    onSurface: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
    surfaceDim: string;
    surfaceBright: string;
    surfaceContainerLowest: string;
    surfaceContainerLow: string;
    surfaceContainer: string;
    surfaceContainerHigh: string;
    surfaceContainerHighest: string;

    outline: string;
    outlineVariant: string;

    inverseSurface: string;
    inverseOnSurface: string;
    inversePrimary: string;

    surfaceTint: string;
    shadow: string;
    scrim: string;
}

function getColorRoles(scheme: SchemeExpressive): ColorRoles {
    return {
        primary: hexFromArgb(scheme.primary),
        onPrimary: hexFromArgb(scheme.onPrimary),
        primaryContainer: hexFromArgb(scheme.primaryContainer),
        onPrimaryContainer: hexFromArgb(scheme.onPrimaryContainer),
        primaryFixed: hexFromArgb(scheme.primaryFixed),
        primaryFixedDim: hexFromArgb(scheme.primaryFixedDim),
        onPrimaryFixed: hexFromArgb(scheme.onPrimaryFixed),
        onPrimaryFixedVariant: hexFromArgb(scheme.onPrimaryFixedVariant),

        secondary: hexFromArgb(scheme.secondary),
        onSecondary: hexFromArgb(scheme.onSecondary),
        secondaryContainer: hexFromArgb(scheme.secondaryContainer),
        onSecondaryContainer: hexFromArgb(scheme.onSecondaryContainer),
        secondaryFixed: hexFromArgb(scheme.secondaryFixed),
        secondaryFixedDim: hexFromArgb(scheme.secondaryFixedDim),
        onSecondaryFixed: hexFromArgb(scheme.onSecondaryFixed),
        onSecondaryFixedVariant: hexFromArgb(scheme.onSecondaryFixedVariant),

        tertiary: hexFromArgb(scheme.tertiary),
        onTertiary: hexFromArgb(scheme.onTertiary),
        tertiaryContainer: hexFromArgb(scheme.tertiaryContainer),
        onTertiaryContainer: hexFromArgb(scheme.onTertiaryContainer),
        tertiaryFixed: hexFromArgb(scheme.tertiaryFixed),
        tertiaryFixedDim: hexFromArgb(scheme.tertiaryFixedDim),
        onTertiaryFixed: hexFromArgb(scheme.onTertiaryFixed),
        onTertiaryFixedVariant: hexFromArgb(scheme.onTertiaryFixedVariant),

        error: hexFromArgb(scheme.error),
        onError: hexFromArgb(scheme.onError),
        errorContainer: hexFromArgb(scheme.errorContainer),
        onErrorContainer: hexFromArgb(scheme.onErrorContainer),

        background: hexFromArgb(scheme.background),
        onBackground: hexFromArgb(scheme.onBackground),

        surface: hexFromArgb(scheme.surface),
        onSurface: hexFromArgb(scheme.onSurface),
        surfaceVariant: hexFromArgb(scheme.surfaceVariant),
        onSurfaceVariant: hexFromArgb(scheme.onSurfaceVariant),
        surfaceDim: hexFromArgb(scheme.surfaceDim),
        surfaceBright: hexFromArgb(scheme.surfaceBright),
        surfaceContainerLowest: hexFromArgb(scheme.surfaceContainerLowest),
        surfaceContainerLow: hexFromArgb(scheme.surfaceContainerLow),
        surfaceContainer: hexFromArgb(scheme.surfaceContainer),
        surfaceContainerHigh: hexFromArgb(scheme.surfaceContainerHigh),
        surfaceContainerHighest: hexFromArgb(scheme.surfaceContainerHighest),

        outline: hexFromArgb(scheme.outline),
        outlineVariant: hexFromArgb(scheme.outlineVariant),

        inverseSurface: hexFromArgb(scheme.inverseSurface),
        inverseOnSurface: hexFromArgb(scheme.inverseOnSurface),
        inversePrimary: hexFromArgb(scheme.inversePrimary),

        surfaceTint: hexFromArgb(scheme.surfaceTint),
        shadow: hexFromArgb(scheme.shadow),
        scrim: hexFromArgb(scheme.scrim),
    };
}

export const lightColorRoles = getColorRoles(lightScheme);
export const darkColorRoles = getColorRoles(darkScheme);
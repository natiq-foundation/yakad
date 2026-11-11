export const layoutTokens = {
    spacing: {
        none: "0rem",
        extraSmall: "0.25rem",
        small: "0.5rem",
        medium: "0.75rem",
        large: "1rem",
        extraLarge: "1.5rem",
        extraExtraLarge: "2rem",
        section: "3rem",
        page: "4rem",
    },
    breakpoint: {
        compact: "600px",
        medium: "840px",
        expanded: "1200px",
        large: "1600px",
    },
} as const;

export type LayoutTokens = typeof layoutTokens;
export type SpacingToken = keyof typeof layoutTokens.spacing;
export type BreakpointToken = keyof typeof layoutTokens.breakpoint;
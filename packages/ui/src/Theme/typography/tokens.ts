export const typographyTokens = {
    display: {
        large: {
            fontSize: "3.5625rem",
            lineHeight: "4rem",
            fontWeight: 400,
            letterSpacing: "-0.015625rem",
        },
        medium: {
            fontSize: "2.8125rem",
            lineHeight: "3.25rem",
            fontWeight: 400,
            letterSpacing: 0,
        },
        small: {
            fontSize: "2.25rem",
            lineHeight: "2.75rem",
            fontWeight: 400,
            letterSpacing: 0,
        },
    },
    headline: {
        large: {
            fontSize: "2rem",
            lineHeight: "2.5rem",
            fontWeight: 400,
            letterSpacing: 0,
        },
        medium: {
            fontSize: "1.75rem",
            lineHeight: "2.25rem",
            fontWeight: 400,
            letterSpacing: 0,
        },
        small: {
            fontSize: "1.5rem",
            lineHeight: "2rem",
            fontWeight: 400,
            letterSpacing: 0,
        },
    },
    title: {
        large: {
            fontSize: "1.375rem",
            lineHeight: "1.75rem",
            fontWeight: 400,
            letterSpacing: 0,
        },
        medium: {
            fontSize: "1rem",
            lineHeight: "1.5rem",
            fontWeight: 500,
            letterSpacing: "0.009375rem",
        },
        small: {
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            fontWeight: 500,
            letterSpacing: "0.00625rem",
        },
    },
    body: {
        large: {
            fontSize: "1rem",
            lineHeight: "1.5rem",
            fontWeight: 400,
            letterSpacing: "0.03125rem",
        },
        medium: {
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            fontWeight: 400,
            letterSpacing: "0.015625rem",
        },
        small: {
            fontSize: "0.75rem",
            lineHeight: "1rem",
            fontWeight: 400,
            letterSpacing: "0.025rem",
        },
    },
    label: {
        large: {
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            fontWeight: 500,
            letterSpacing: "0.00625rem",
        },
        medium: {
            fontSize: "0.75rem",
            lineHeight: "1rem",
            fontWeight: 500,
            letterSpacing: "0.03125rem",
        },
        small: {
            fontSize: "0.6875rem",
            lineHeight: "1rem",
            fontWeight: 500,
            letterSpacing: "0.03125rem",
        },
    },
} as const;

export type TypographyTokens = typeof typographyTokens;
export type TypographyRole = keyof TypographyTokens;
export type TypographySize<R extends TypographyRole> =
    keyof TypographyTokens[R];
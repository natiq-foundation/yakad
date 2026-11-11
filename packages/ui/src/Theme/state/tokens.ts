export const stateTokens = {
    hover: {
        opacity: 0.08,
    },
    focus: {
        opacity: 0.1,
    },
    pressed: {
        opacity: 0.1,
    },
    dragged: {
        opacity: 0.16,
    },
    disabled: {
        stateLayerOpacity: 0,
        contentOpacity: 0.38,
    },
} as const;

export type StateTokens = typeof stateTokens;
export type InteractiveState = keyof StateTokens;
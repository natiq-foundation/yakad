export const elevationTokens = {
    level0: {
        value: 0,
        shadow: "none",
    },
    level1: {
        value: 1,
        shadow: "0px 1px 2px 0px rgb(0 0 0 / 30%), 0px 1px 3px 1px rgb(0 0 0 / 15%)",
    },
    level2: {
        value: 2,
        shadow: "0px 1px 2px 0px rgb(0 0 0 / 30%), 0px 2px 6px 2px rgb(0 0 0 / 15%)",
    },
    level3: {
        value: 3,
        shadow: "0px 1px 3px 0px rgb(0 0 0 / 30%), 0px 4px 8px 3px rgb(0 0 0 / 15%)",
    },
    level4: {
        value: 4,
        shadow: "0px 2px 3px 0px rgb(0 0 0 / 30%), 0px 6px 10px 4px rgb(0 0 0 / 15%)",
    },
    level5: {
        value: 5,
        shadow: "0px 4px 4px 0px rgb(0 0 0 / 30%), 0px 8px 12px 6px rgb(0 0 0 / 15%)",
    },
} as const;

export type ElevationTokens = typeof elevationTokens;
export type ElevationLevel = keyof ElevationTokens;
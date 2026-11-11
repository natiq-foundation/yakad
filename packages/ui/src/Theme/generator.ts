
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { typographyTokens } from "./typography/tokens";
import { shapeTokens } from "./shape/tokens";
import { elevationTokens } from "./elevation/tokens";
import { motionTokens } from "./motion/tokens";
import { stateTokens } from "./state/tokens";
import { layoutTokens } from "./layout/tokens";

function toKebabCase(value: string): string {
    return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

function createVariables(
    tokens: Record<string, string | number>
): string {
    return Object.entries(tokens)
        .map(([name, value]) => `    ${name}: ${value};`)
        .join("\n");
}

function createTypographyVariables(): string {
    const variables: Record<string, string | number> = {
        "--yakad-font-family": "Roboto, sans-serif",
    };

    for (const [role, sizes] of Object.entries(typographyTokens)) {
        for (const [size, properties] of Object.entries(sizes)) {
            const prefix = `--md-sys-typescale-${role}-${size}`;

            variables[`${prefix}-size`] = properties.fontSize;
            variables[`${prefix}-line-height`] = properties.lineHeight;
            variables[`${prefix}-weight`] = properties.fontWeight;
            variables[`${prefix}-tracking`] = properties.letterSpacing;
        }
    }

    return createVariables(variables);
}

function createShapeVariables(): string {
    const variables: Record<string, string | number> = {};

    for (const [name, value] of Object.entries(shapeTokens)) {
        variables[`--md-sys-shape-corner-${toKebabCase(name)}`] = value;
    }

    return createVariables(variables);
}

function createElevationVariables(): string {
    const variables: Record<string, string | number> = {};

    for (const [name, token] of Object.entries(elevationTokens)) {
        variables[`--md-sys-elevation-${toKebabCase(name)}`] =
            token.shadow;
    }

    return createVariables(variables);
}

function createMotionVariables(): string {
    const variables: Record<string, string | number> = {};

    for (const [name, value] of Object.entries(motionTokens.duration)) {
        variables[`--md-sys-motion-duration-${toKebabCase(name)}`] =
            value;
    }

    for (const [name, value] of Object.entries(motionTokens.easing)) {
        variables[`--md-sys-motion-easing-${toKebabCase(name)}`] =
            value;
    }

    return createVariables(variables);
}

function createStateVariables(): string {
    const variables: Record<string, string | number> = {};

    for (const name of ["hover", "focus", "pressed", "dragged"] as const) {
        variables[
            `--md-sys-state-${toKebabCase(name)}-state-layer-opacity`
        ] = stateTokens[name].opacity;
    }

    variables["--md-sys-state-disabled-state-layer-opacity"] =
        stateTokens.disabled.stateLayerOpacity;

    variables["--md-sys-state-disabled-content-opacity"] =
        stateTokens.disabled.contentOpacity;

    return createVariables(variables);
}

function createLayoutVariables(): string {
    const variables: Record<string, string | number> = {};

    for (const [name, value] of Object.entries(layoutTokens.spacing)) {
        variables[`--yakad-spacing-${toKebabCase(name)}`] = value;
    }

    for (const [name, value] of Object.entries(layoutTokens.breakpoint)) {
        variables[`--yakad-breakpoint-${toKebabCase(name)}`] = value;
    }

    return createVariables(variables);
}

const sections = [
    createTypographyVariables(),
    createShapeVariables(),
    createElevationVariables(),
    createMotionVariables(),
    createStateVariables(),
    createLayoutVariables(),
];

const css = `:root {
${sections.join("\n\n")}
}
`;

const outputDirectory = resolve(process.cwd(), "dist/theme");
const tokensOutput = resolve(outputDirectory, "tokens.css");
const themeOutput = resolve(outputDirectory, "theme.css");

mkdirSync(dirname(tokensOutput), { recursive: true });

writeFileSync(tokensOutput, css);

writeFileSync(
    themeOutput,
    '@import "./color/colors.css";\n@import "./tokens.css";\n'
);

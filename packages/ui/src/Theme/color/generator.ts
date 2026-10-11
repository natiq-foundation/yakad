import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { createColorTokens } from "./tokens";
import { darkColorRoles, lightColorRoles } from "./roles";

function createCssVariables(
    tokens: ReturnType<typeof createColorTokens>
) {
    return Object.entries(tokens)
        .map(([name, value]) => `    --md-sys-color-${name}: ${value};`)
        .join("\n");
}

const lightTokens = createColorTokens(lightColorRoles);
const darkTokens = createColorTokens(darkColorRoles);

const css = `:root {
${createCssVariables(lightTokens)}
}

.dark {
${createCssVariables(darkTokens)}
}
`;

const output = resolve(
    process.cwd(),
    "dist/theme/color/colors.css"
);

mkdirSync(dirname(output), { recursive: true });

writeFileSync(output, css);
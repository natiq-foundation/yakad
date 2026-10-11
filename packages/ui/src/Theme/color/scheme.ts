import { SchemeExpressive } from "@material/material-color-utilities";
import { sourceHct } from "./hct";

export const lightScheme = new SchemeExpressive(
    sourceHct,
    false,
    0
);

export const darkScheme = new SchemeExpressive(
    sourceHct,
    true,
    0
);
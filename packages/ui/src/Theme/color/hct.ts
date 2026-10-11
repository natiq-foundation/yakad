import { argbFromHex, Hct } from "@material/material-color-utilities";
import { sourceColor } from "./source";

export const sourceHct = Hct.fromInt(argbFromHex(sourceColor));

export const hue = sourceHct.hue;
export const chroma = sourceHct.chroma;
export const tone = sourceHct.tone;
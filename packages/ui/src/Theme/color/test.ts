import { hexFromArgb } from "@material/material-color-utilities";
import { lightScheme, darkScheme } from "./scheme";

console.log("Light");
console.log("Primary:", hexFromArgb(lightScheme.primary));
console.log("Secondary:", hexFromArgb(lightScheme.secondary));
console.log("Tertiary:", hexFromArgb(lightScheme.tertiary));
console.log("Background:", hexFromArgb(lightScheme.background));
console.log("Surface:", hexFromArgb(lightScheme.surface));

console.log("Dark");
console.log("Primary:", hexFromArgb(darkScheme.primary));
console.log("Secondary:", hexFromArgb(darkScheme.secondary));
console.log("Tertiary:", hexFromArgb(darkScheme.tertiary));
console.log("Background:", hexFromArgb(darkScheme.background));
console.log("Surface:", hexFromArgb(darkScheme.surface));
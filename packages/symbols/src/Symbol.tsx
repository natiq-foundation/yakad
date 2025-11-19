import classNames from "classnames";
import { IconCode } from "./types";
import styles from "./public/css/style.module.css";
import "material-symbols/outlined.css";
import "material-symbols/rounded.css";
import "material-symbols/sharp.css";

export interface SymbolProps extends React.HTMLAttributes<HTMLElement> {
    icon: IconCode;
    filled?: boolean;
    type?: "outlined" | "round" | "sharp";
    size?: number | "small" | "medium" | "large";
    mirror?: "horizontal" | "vertical" | "diagonal";
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
    grade?: "low" | "medium" | "high";
    opticalSize?: 20 | 24 | 40 | 48;
    ref?: React.Ref<HTMLSpanElement>;
}

interface SymbolSizeMap {
    small: number;
    medium: number;
    large: number;
}
const symbolSizeMaps: SymbolSizeMap = {
    small: 2,
    medium: 2.4,
    large: 3.2,
};

export function Symbol({
    icon,
    type = "outlined",
    size = 24,
    mirror,
    className,
    style,
    filled,
    weight,
    grade,
    opticalSize,
    ref,
    ...restProps
}: SymbolProps) {
    const gradePresetMap = {
        low: -25,
        medium: 0,
        high: 150,
    };

    const typeClassName =
        type === "round"
            ? "material-symbols-rounded"
            : type === "sharp"
            ? "material-symbols-sharp"
            : "material-symbols-outlined";

    const joinedClassNames = classNames(
        typeClassName,
        { [styles[mirror + "Mirror"]]: mirror },
        className
    );

    const sizeValue: string =
        (typeof size === "number" ? size : symbolSizeMaps[size]) + "px";

    // Determine font variation axis values
    const computedWeight = weight ?? 400;
    const computedGrade = gradePresetMap[grade ?? "medium"];

    const computedOpsz = (opticalSize ?? 24) as 20 | 24 | 40 | 48;

    const fontVariationParts = [
        `"FILL" ${filled ? 1 : 0}`,
        `"wght" ${computedWeight}`,
        `"GRAD" ${computedGrade}`,
        `"opsz" ${computedOpsz}`,
    ].join(", ");

    const joinedStyles = {
        ...style,
        width: sizeValue,
        height: sizeValue,
        fontSize: sizeValue,
        lineHeight: sizeValue,
        fontVariationSettings: fontVariationParts,
    };

    return (
        <span
            {...restProps}
            ref={ref}
            className={joinedClassNames}
            style={joinedStyles}
        >
            {icon}
        </span>
    );
}

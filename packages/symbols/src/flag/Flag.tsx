import React from "react";
import * as Flags from "./flags";
import type { FlagCode } from "./types";
import { IconSizeKey, resolveIconSize } from "../sizes";

interface FlagProps extends React.HTMLAttributes<HTMLSpanElement> {
  code?: FlagCode;
  size?: number | IconSizeKey;
  svgProps?: React.SVGProps<SVGSVGElement>;
}

export const Flag = ({ code, size, style, svgProps, ...restProps }: FlagProps) => {
  const componentName = code
    ? `${code.toUpperCase().split("-").join("")}Flag`
    : "UNFlag";

  const SelectedFlag = (Flags as any)[componentName];

  if (!SelectedFlag) {
    console.warn(
      `Flag with code "${code}" (looking for ${componentName}) not found.`
    );
    return null;
  }

  const pxSize = size ? resolveIconSize(size) : undefined;

  return (
    <span
      {...restProps}
      style={{
        display: "inline-flex",
        width: pxSize,
        height: pxSize,
        ...style,
      }}
    >
      <SelectedFlag
        {...svgProps}
        style={{ width: "100%", height: "100%", ...svgProps?.style }}
      />
    </span>
  );
};
import React from "react";
import * as Flags from "./flags";
import type { FlagCode } from "./types";

interface FlagProps extends React.SVGProps<SVGSVGElement> {
  code: FlagCode;
}

export const Flag = ({ code, ...props }: FlagProps) => {
  const componentName = `${code.toUpperCase().split("-").join("")}Flag`;

  const SelectedFlag = (Flags as any)[componentName];

  if (!SelectedFlag) {
    console.warn(
      `Flag with code "${code}" (looking for ${componentName}) not found.`,
    );
    return null;
  }

  return <SelectedFlag {...props} />;
};


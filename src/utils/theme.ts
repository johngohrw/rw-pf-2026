import type { CSSProperties } from "react";
import type { MotionValue } from "motion/react";

export const THEME_VARS = ["root-text-scale", "root-scale"] as const;
export const varOf = (key: (typeof THEME_VARS)[number] | (string & {})) =>
  `var(--${key})`;
export const keyOf = (key: (typeof THEME_VARS)[number] | (string & {})) =>
  `--${key}`;

export const calc = (v1: string | number, op: string, v2: string | number) =>
  `calc(${v1} ${op} ${v2})`;

export const rsc = (scale: number) => `calc(${varOf("root-scale")} * ${scale})`;
export const rscWithMin = (scale: number, minVal: CSSProperties["width"]) =>
  `max(${minVal}, ${rsc(scale)})`;
export const rscWithMax = (scale: number, maxVal: CSSProperties["width"]) =>
  `min(${maxVal}, ${rsc(scale)})`;
export const rscClamped = (
  min: CSSProperties["width"],
  scale: number,
  max: CSSProperties["width"]
) => `clamp(${min}, ${rsc(scale)},${max})`;

export const rtsc = (scale: number) =>
  `calc(${varOf("root-text-scale")} * ${scale})`;
export const rtscWithMin = (scale: number, minVal: CSSProperties["width"]) =>
  `max(${minVal}, ${rtsc(scale)})`;
export const rtscWithMax = (scale: number, maxVal: CSSProperties["width"]) =>
  `min(${maxVal}, ${rtsc(scale)})`;

export const motionVars = (props: Record<string, any>) => {
  return props as any;
};

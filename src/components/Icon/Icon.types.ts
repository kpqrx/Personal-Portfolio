import type { ForwardedRef } from "react";
import type { IconProps as FeatherIconProps } from "react-feather/dist/index";

export type IconNameType =
  | "home"
  | "user"
  | "pen-tool"
  | "calendar"
  | "mail"
  | "globe"
  | "linkedin"
  | "github"
  | "settings"
  | "arrow-left"
  | "arrow-right"
  | "arrow-down-right"
  | "sun"
  | "moon"
  | "triangle";

export interface IconProps extends FeatherIconProps {
  name: IconNameType;
  gradientStroke?: boolean;
  ref: ForwardedRef<SVGSVGElement>;
}

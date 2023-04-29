import type { IconNameType } from "../Icon/Icon.types";
import type { TooltipAnchorPointType } from "../Tooltip/Tooltip.types";

export interface IconButtonProps {
  label: string;
  icon: IconNameType;
  anchorPoint?: TooltipAnchorPointType;
}

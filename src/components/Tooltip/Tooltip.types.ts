export type TooltipAnchorPointType = "left" | "center" | "right";

export interface TooltipProps extends React.PropsWithChildren {
  anchorPoint?: TooltipAnchorPointType;
}

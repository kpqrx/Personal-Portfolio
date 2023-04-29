import { StyledContainer } from "@/components/Tooltip/Tooltip.styled";
import type { TooltipProps } from "@/components/Tooltip/Tooltip.types";
import { forwardRef } from "react";

const Tooltip = forwardRef<HTMLSpanElement, TooltipProps>((props, ref) => {
  const { children, anchorPoint = "center", ...restProps } = props;

  return (
    <StyledContainer $anchorPoint={anchorPoint} {...restProps} ref={ref}>
      {children}
    </StyledContainer>
  );
});

Tooltip.displayName = "Tooltip";

export default Tooltip;

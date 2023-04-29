import type { TooltipAnchorPointType } from "@/components/Tooltip/Tooltip.types";
import styled, { css } from "styled-components";

const anchorPositions = {
  left: css`
    left: 0;
    transform: translateX(75%);
  `,
  center: css`
    left: 50%;
    transform: translateX(-50%);
  `,
  right: css`
    right: 0;
    transform: translateX(-75%);
  `,
};

export const StyledContainer = styled.span<{
  $anchorPoint: TooltipAnchorPointType;
}>`
  ${({ theme }) => theme.typography.xs};
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  border-radius: ${({ theme }) => theme.sizes("xxs")};
  padding: ${({ theme }) => theme.sizes("xxxxs", "xs")};
  white-space: nowrap;
  pointer-events: none;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -${({ theme }) => theme.sizes("xxxs")};
    ${({ $anchorPoint }) => anchorPositions[$anchorPoint]};
    width: 0;
    height: 0;
    border-left: ${({ theme }) => theme.sizes("xxxs")} solid transparent;
    border-right: ${({ theme }) => theme.sizes("xxxs")} solid transparent;
    border-bottom: ${({ theme }) => theme.sizes("xxxs")} solid
      ${({ theme }) => theme.colors.bg.secondary};
  }
`;

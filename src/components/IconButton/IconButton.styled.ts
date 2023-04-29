import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import Tooltip from "@/components/Tooltip";

export const StyledContainer = styled(motion.button)`
  padding: ${({ theme }) => theme.sizes("xxxs")};
  position: relative;
  color: ${({ theme }) => theme.colors.text.tertiary};
`;

const tooltipPositions = {
  left: css`
    left: 0;
    transform-origin: left;
  `,
  center: css`
    left: calc(-50% - ${({ theme }) => theme.sizes("xxs")});
  `,
  right: css`
    right: 0;
    transform-origin: right;
  `,
};

export const StyledTooltip = styled(motion(Tooltip))`
  position: absolute;
  margin-top: ${({ theme }) => theme.sizes("xxxs")};
  ${({ anchorPoint = "center" }) => tooltipPositions[anchorPoint]};
`;

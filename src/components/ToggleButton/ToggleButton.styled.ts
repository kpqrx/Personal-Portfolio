import styled, { css } from "styled-components";
import { m } from "framer-motion";
import Icon from "@/components/Icon";

export const StyledContainer = styled.button`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.sizes("xxxs")};
  min-width: ${({ theme }) => theme.sizes("xs")};
  min-height: ${({ theme }) => theme.sizes("xs")};
  border-radius: 12px;
  transition: all 0.25s ease;
  position: relative;
  color: ${({ theme }) => theme.colors.text.tertiary};

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.gray[800]};
  }
`;

export const StyledIcon = styled(m(Icon))<{ $isAbsolute?: boolean }>`
  ${({ $isAbsolute }) =>
    $isAbsolute &&
    css`
      position: absolute;
      inset: ${({ theme }) => theme.sizes("xxxs")};
    `}
  width: 24px;
  height: 24px;
`;

export const StyledLabel = styled(m.span)<{ $isVisible: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.sizes("xs")};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  width: ${({ theme }) => theme.sizes("xs")};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: 0.25s opacity ease;
  flex: 1;
  text-align: center;
`;

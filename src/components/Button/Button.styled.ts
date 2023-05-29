import styled, { css } from "styled-components";
import type { ButtonProps } from "./Button.types";

export const StyledButton = styled.button<ButtonProps>`
  ${({ theme }) => theme.typography.sm};
  color: ${({ theme }) => theme.colors.text.primary};

  ${({ variant }) =>
    variant === "primary" &&
    css`
      padding: ${({ theme }) => theme.sizes("xxxs", "sm")};
      border: 2px solid currentColor;
      border-radius: ${({ theme }) => theme.sizes("xxs")};
    `}
  ${({ variant }) =>
    variant === "secondary" &&
    css`
      padding: ${({ theme }) => theme.sizes("xxxxs", "xs")};
      border-radius: ${({ theme }) => theme.sizes("xl")};
      background-color: ${({ theme }) => theme.colors.bg.secondary};
      font-size: ${({ theme }) => theme.fontSizes.xs};
      transition-property: filter;

      @media ${({ theme }) => theme.breakpoints("md")} {
        font-size: ${({ theme }) => theme.fontSizes.sm};
      }

      &:hover,
      &:focus-within {
        filter: contrast(1.125);
      }
    `}
  ${({ variant }) =>
    variant === "tertiary" &&
    css`
      ${({ theme }) => theme.typography.md};
      position: relative;
      white-space: nowrap;
      padding: ${({ theme }) => theme.sizes("xs", "lg")};
      border-radius: ${({ theme }) => theme.sizes("xxs")};
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.white};
      box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.35);
      margin: 4px;

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -10;
        opacity: 0.75;
        transform: scaleX(1.05) scaleY(1.1);
        filter: blur(16px);
        background: repeating-conic-gradient(
          ${({ theme }) => theme.colors.pink} 25%,
          ${({ theme }) => theme.colors.cyan} 45%,
          ${({ theme }) => theme.colors.blue} 65%,
          ${({ theme }) => theme.colors.pink} 80%
        );
      }
    `}
`;

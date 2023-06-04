import Logo from "@/components/Logo";
import { forSafari, forChromium, forFirefox } from "@/theme/helpers";
import { m } from "framer-motion";
import styled, { css } from "styled-components";

export const StyledContainer = styled(m.header)`
  position: fixed;
  width: 100%;
  padding: ${({ theme }) => theme.sizes("xxs")};
  color: ${({ theme }) => theme.colors.white};
  z-index: 20;
  will-change: backdrop-filter;
  transition-property: color;

  @media ${({ theme }) => theme.breakpoints("md")} {
    padding: ${({ theme }) => theme.sizes("xs", "xxxl")};
    height: 146px;
  }

  ${forSafari(css`
    backdrop-filter: blur(calc(var(--scroll-modifier) * 12px))
      contrast(calc(1 + (var(--scroll-modifier) * 0.05)))
      brightness(calc(1 - (var(--scroll-modifier) * 0.05)));
    border-bottom: 1px solid
      hsla(0, 0%, 0%, calc(0.05 * var(--scroll-modifier)));
  `)}

  ${forChromium(css`
    mix-blend-mode: exclusion;
    backdrop-filter: blur(calc(var(--scroll-modifier) * 12px))
      contrast(calc(1 + (var(--scroll-modifier) * 0.05)))
      brightness(calc(1 - (var(--scroll-modifier) * 0.05)));
    border-bottom: 1px solid
      hsla(0, 0%, 0%, calc(0.05 * var(--scroll-modifier)));
  `)}

  ${forFirefox(css`
    mix-blend-mode: exclusion;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(calc(var(--scroll-modifier) * 12px))
        contrast(calc(1 + (var(--scroll-modifier) * 0.05)))
        brightness(calc(1 - (var(--scroll-modifier) * 0.05)));
      border-bottom: 1px solid
        hsla(0, 0%, 0%, calc(0.05 * var(--scroll-modifier)));
    }
  `)}
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.screens.xl};
  height: 100%;
  margin: 0 auto;

  ${forSafari(css`
    mix-blend-mode: exclusion;
    backdrop-filter: opacity(0);
  `)}
`;

export const StyledLogo = styled(Logo)`
  flex: 1;
  height: 100%;
  z-index: 20;
  color: currentColor;

  @media ${({ theme }) => theme.breakpoints("lg")} {
    height: auto;
    max-width: none;
  }
`;

import Logo from "@/components/Logo";
import { m } from "framer-motion";
import styled from "styled-components";

export const StyledContainer = styled(m.header)`
  position: fixed;
  width: 100%;
  padding: ${({ theme }) => theme.sizes("xxs")};
  color: ${({ theme }) => theme.colors.text.primary};
  z-index: 20;
  will-change: backdrop-filter;
  backdrop-filter: blur(calc(var(--scroll-modifier) * 12px))
    contrast(calc(1 + (var(--scroll-modifier) * 0.05)))
    brightness(calc(1 - (var(--scroll-modifier) * 0.05)));
  border-bottom: 1px solid hsla(0, 0%, 0%, calc(0.05 * var(--scroll-modifier)));

  @media ${({ theme }) => theme.breakpoints("md")} {
    padding: ${({ theme }) => theme.sizes("xs", "xxxl")};
    height: 146px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.screens.xl};
  height: 100%;
  margin: 0 auto;
`;

export const StyledLogo = styled(Logo)`
  flex: 1;
  height: 100%;
  z-index: 20;

  @media ${({ theme }) => theme.breakpoints("lg")} {
    height: auto;
    max-width: none;
  }
`;

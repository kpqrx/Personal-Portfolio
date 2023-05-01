import { motion } from "framer-motion";
import Link from "next/link";
import styled, { css } from "styled-components";

export const StyledContainer = styled(motion.div)`
  display: contents;
`;

export const StyledNavigationToggleButton = styled.button`
  padding: ${({ theme }) => theme.sizes("xxs")};
  fill: ${({ theme }) => theme.colors.text.primary};
  z-index: 20;

  @media ${({ theme }) => theme.breakpoints("lg")} {
    display: none;
  }
`;

export const StyledNavigationWrapper = styled.nav<{ isToggled: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.bg.secondary};

  @media ${({ theme }) => theme.breakpoints("lg")} {
    position: relative;
    display: contents;
    padding: 0;
    background-color: transparent;
  }

  ${({ isToggled }) =>
    isToggled
      ? css`
          transform: translateX(0);
        `
      : css`
          transform: translateX(100%);
        `}
`;

export const StyledNavigationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.sizes("lg")};

  @media ${({ theme }) => theme.breakpoints("lg")} {
    gap: 0;
  }
`;

export const StyledNavigationItem = styled.li`
  min-width: ${({ theme }) => theme.sizes("xxxl")};
  flex-basis: min(${({ theme }) => theme.sizes("xxxl")}, 50%);
`;

export const StyledNavigationLink = styled(Link)`
  ${({ theme }) => theme.typography.xs};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes("xxxs")};
  align-items: center;
`;

export const StyledTogglersContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes("xs")};
  justify-content: flex-end;

  @media ${({ theme }) => theme.breakpoints("lg")} {
    flex: 1;
  }
`;

import Icon from "@/components/Icon";
import { m } from "framer-motion";
import Link from "next/link";
import styled, { css } from "styled-components";

export const StyledContainer = styled(m.div)`
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

export const StyledNavigationWrapper = styled.nav<{ $isToggled: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;
  inset: 0;
  padding: ${({ theme }) => theme.sizes("sm", "xxs")};
  background-color: ${({ theme }) => theme.colors.bg.secondary};

  @media ${({ theme }) => theme.breakpoints("md")} {
    padding: ${({ theme }) => theme.sizes("lg", "xl")};
  }

  @media ${({ theme }) => theme.breakpoints("lg")} {
    position: relative;
    display: contents;
    padding: 0;
    background-color: transparent;
  }

  @media ${({ theme }) => theme.breakpoints("xl")} {
    padding: ${({ theme }) => theme.sizes("xxxl")};
  }

  ${({ $isToggled }) =>
    $isToggled
      ? css`
          transform: translateX(0);
        `
      : css`
          transform: translateX(100%);
        `}
`;

export const StyledNavigationList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  gap: ${({ theme }) => theme.sizes("sm")};
  width: 100%;

  @media ${({ theme }) => theme.breakpoints("md")} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.breakpoints("lg")} {
    display: flex;
    flex-wrap: wrap;
    gap: 0;
  }
`;

export const StyledNavigationItem = styled.li`
  min-width: ${({ theme }) => theme.sizes("xxxl")};
  flex-basis: min(${({ theme }) => theme.sizes("xxxl")}, 50%);
  background-color: ${({ theme }) => theme.colors.bg.tertiary};
  padding: ${({ theme }) => theme.sizes("xs", "sm")};
  border-radius: ${({ theme }) => theme.radii.md};

  @media ${({ theme }) => theme.breakpoints("md")} {
    padding: ${({ theme }) => theme.sizes("xs")};
  }

  @media ${({ theme }) => theme.breakpoints("lg")} {
    background: none;
    padding: 0;
    border-radius: 0;
  }
`;

export const StyledNavigationLink = styled(Link)`
  ${({ theme }) => theme.typography.sm};

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.sizes("sm")};

  @media ${({ theme }) => theme.breakpoints("md")} {
    ${({ theme }) => theme.typography.xs};
    align-items: flex-start;
    flex-direction: column;
    gap: ${({ theme }) => theme.sizes("xxs")};

    svg {
      //width: ${({ theme }) => theme.sizes("md")};
      //height: ${({ theme }) => theme.sizes("md")};
    }
  }

  @media ${({ theme }) => theme.breakpoints("lg")} {
    gap: ${({ theme }) => theme.sizes("xxxs")};
    align-items: center;

    svg {
      width: inherit;
      height: inherit;
    }
  }
`;

export const StyledTogglersContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes("xs")};
  justify-content: flex-end;

  @media ${({ theme }) => theme.breakpoints("lg")} {
    flex: 1;
  }
`;

export const StyledNavigationItemIcon = styled(Icon)`
  filter: brightness(0.9) contrast(1.15);
`;

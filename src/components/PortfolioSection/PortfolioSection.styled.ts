import PortfolioTile from "@/components/PortfolioTile";
import styled, { css } from "styled-components";

export const StyledContainer = styled.div<{ $isDarkModeEnabled: boolean }>`
  position: relative;
  width: 100%;
  padding: ${({ theme }) => theme.sizes("lg", "xxs")};
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.bg.primary};
  background-image: linear-gradient(
    to right,
    transparent calc(100% - 1px),
    ${({ theme }) => theme.colors.bg.secondary}
  );
  background-repeat: repeat;
  background-size: calc(100% / 7);

  @media ${({ theme }) => theme.breakpoints("md")} {
    padding: ${({ theme }) => theme.sizes("lg", "xl")};
  }
  @media ${({ theme }) => theme.breakpoints("xl")} {
    padding: ${({ theme }) => theme.sizes("xxxl")};
  }

  ${({ $isDarkModeEnabled }) =>
    $isDarkModeEnabled &&
    css`
      &::before,
      &::after {
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        height: 128px;
        clip-path: polygon(
          0 0,
          14% 75%,
          28% 5%,
          43% 70%,
          57% 25%,
          71% 80%,
          86% 60%,
          100% 0,
          100% 100%,
          0 100%
        );
      }

      &::before {
        top: 0;
        transform: translateY(-100%);
        background: inherit;
        background-color: transparent;
      }

      &::after {
        bottom: 0;
        background: ${({ theme }) => theme.colors.bg.primary};
      }
    `}
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: ${({ theme }) => theme.sizes("lg")};
  max-width: ${({ theme }) => theme.screens.xl};
  margin: 0 auto;
`;

export const StyledHeading = styled.h2`
  ${({ theme }) => theme.typography.lg};
  z-index: 1;

  &::after {
    content: "";
    display: block;
    width: ${({ theme }) => theme.sizes("lg")};
    height: ${({ theme }) => theme.sizes("xxxxs")};
    border-radius: ${({ theme }) => theme.sizes("xxxxs")};
    margin: ${({ theme }) => theme.sizes("xs")} auto 0;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.brand.primary},
      ${({ theme }) => theme.colors.brand.secondary},
      ${({ theme }) => theme.colors.brand.tertiary}
    );
  }
`;

export const StyledFiltersWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes("xxs")};
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledTilesList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.sizes("xxs")};
  width: 100%;

  @media ${({ theme }) => theme.breakpoints("lg")} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.breakpoints("xl")} {
    grid-template-columns: 2fr 0.25fr 0.25fr 2fr;
  }
`;

export const StyledTilesItem = styled.li`
  @media ${({ theme }) => theme.breakpoints("xl")} {
    &:nth-child(4n-2) {
      grid-column: 2 / 5;
    }

    &:nth-child(4n-1) {
      grid-column: 1/4;
    }
  }
`;

export const StyledPortfolioTile = styled(PortfolioTile)`
  min-height: 375px;
`;

export const StyledProgressWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: ${({ theme }) => theme.sizes("xs")};
  ${({ theme }) => theme.typography.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  z-index: 1;
`;

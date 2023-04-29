import styled, { keyframes } from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: ${({ theme }) => theme.sizes("sm", "xxxs")};
  background-color: ${({ theme }) => theme.colors.bg.primary};

  @media ${({ theme }) => theme.breakpoints("md")} {
    padding: ${({ theme }) => theme.sizes("lg", "xl")};
  }

  @media ${({ theme }) => theme.breakpoints("xl")} {
    padding: ${({ theme }) => theme.sizes("xxxl")};
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
  max-width: ${({ theme }) => theme.screens.xl};
  margin: 0 auto;
`;

export const StyledLinksWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes("xxs")};
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.sizes("sm")};
  z-index: 10;

  @media ${({ theme }) => theme.breakpoints("md")} {
    gap: ${({ theme }) => theme.sizes("md")};
  }

  @media ${({ theme }) => theme.breakpoints("lg")} {
    gap: ${({ theme }) => theme.sizes("lg")};
  }
`;

const ctaAnimation = keyframes`
    0%, 100% {
        transform: translateY(-8px);
    }

    50% {
        transform: translateY(8px);
    }
`;

const StyledCTAButtonBase = styled.button`
  display: none;
  position: relative;
  bottom: ${({ theme }) => theme.sizes("md")};
  z-index: 10;
  animation: ${ctaAnimation} 2500ms infinite;
  color: ${({ theme }) => theme.colors.text.primary};
  mix-blend-mode: multiply;

  @media (prefers-color-scheme: dark) {
    mix-blend-mode: exclusion;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    height: ${({ theme }) => theme.sizes("xxl")};
    width: 1px;
    background-color: currentColor;
    z-index: -10;
  }

  @media ${({ theme }) => theme.breakpoints("md")} {
    display: block;
  }

  &:hover,
  &:focus {
    animation-play-state: paused;
  }
`;

const StyledCTAButtonText = styled.span`
  ${({ theme }) => theme.typography.xs};
  text-transform: uppercase;
  padding: ${({ theme }) => theme.sizes("xxxs")} 0;
  background-color: #fff;

  @media (prefers-color-scheme: dark) {
    background-color: #000;
  }
`;

export const StyledCTAButton = Object.assign(StyledCTAButtonBase, {
  Text: StyledCTAButtonText,
});

const StyledTypographyWrapper = styled.h1`
  font-size: clamp(
    ${({ theme }) => theme.fontSizes.lg},
    8.5vw,
    ${({ theme }) => theme.fontSizes.xl}
  );
  line-height: 1.5;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.pink},
    ${({ theme }) => theme.colors.blue},
    ${({ theme }) => theme.colors.cyan}
  );
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
  user-select: none;
`;

const StyledTypographyBase = styled.div`
  mix-blend-mode: darken;

  @media (prefers-color-scheme: dark) {
    mix-blend-mode: lighten;
  }
`;

const StyledTypographyStroke = styled.span`
  -webkit-text-stroke: 6px transparent;
  color: #fff;

  @media (prefers-color-scheme: dark) {
    color: #000;
  }
`;

export const StyledTypography = Object.assign(StyledTypographyBase, {
  Wrapper: StyledTypographyWrapper,
  Stroke: StyledTypographyStroke,
});

export const StyledSeparator = styled.hr`
  max-width: clamp(64px, 20rem, 360px);
  background: ${({ theme }) => theme.colors.bg.tertiary};
  height: 2px;
`;

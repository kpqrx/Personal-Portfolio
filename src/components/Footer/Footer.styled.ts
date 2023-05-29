import Button from "@/components/Button";
import Logo from "@/components/Logo";
import styled from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  padding: ${({ theme }) => theme.sizes("lg", "xxs")};
  color: ${({ theme }) => theme.colors.white};
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.gray[800]},
    ${({ theme }) => theme.colors.gray[700]}
  );
  z-index: 0;
  perspective: 110px;

  @media ${({ theme }) => theme.breakpoints("md")} {
    padding: ${({ theme }) => theme.sizes("lg", "xl")};
  }
  @media ${({ theme }) => theme.breakpoints("xl")} {
    padding: ${({ theme }) => theme.sizes("xxxl")};
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(90deg, black 23px, transparent 1%) center,
      linear-gradient(black 23px, transparent 1%) center, white;
    background-size: 24px 24px;
    mix-blend-mode: screen;
    opacity: 0.65;
    transform: rotateX(35deg) rotateY(0deg) scale(2.5, 0.5);
    transform-style: preserve-3d;
    transform-origin: bottom;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.sizes("xl")};
  justify-content: space-between;
  position: relative;
  max-width: ${({ theme }) => theme.screens.xl};
  margin: 0 auto;

  @media ${({ theme }) => theme.breakpoints("lg")} {
    display: grid;
    grid-template-columns: 2fr 0.75fr;
  }
`;

const StyledHeadingBase = styled.div`
  position: relative;
  flex-basis: 100%;
  display: flex;
  flex-flow: column;
  gap: ${({ theme }) => theme.sizes("xs")};

  @media ${({ theme }) => theme.breakpoints("lg")} {
    flex-basis: min(525px, 50%);
  }
`;

const StyledHeadingPrimary = styled.h2`
  font-size: clamp(
    ${({ theme }) => theme.fontSizes.md},
    12vw,
    ${({ theme }) => theme.fontSizes.lg}
  );
  line-height: clamp(
    ${({ theme }) => theme.lineHeights.md},
    16vw,
    ${({ theme }) => theme.lineHeights.lg}
  );
`;
const StyledHeadingSecondary = styled.span`
  ${({ theme }) => theme.typography.md};
  color: ${({ theme }) => theme.colors.gray[400]};

  @media ${({ theme }) => theme.breakpoints("lg")} {
    ${({ theme }) => theme.typography.md};
  }
`;

export const StyledHeading = Object.assign(StyledHeadingBase, {
  Primary: StyledHeadingPrimary,
  Secondary: StyledHeadingSecondary,
});

const StyledCVNoticeBase = styled.div`
  display: flex;
  flex-flow: column;
  grid-column: 2 / 3;
  color: ${({ theme }) => theme.colors.gray[400]};
  background: hsla(0, 100%, 100%, 10%);
  padding: ${({ theme }) => theme.sizes("sm")};
  gap: ${({ theme }) => theme.sizes("xs")};
  border-radius: ${({ theme }) => theme.sizes("xxs")};
`;
const StyledCVNoticeTypography = styled.p`
  text-align: justify;
  letter-spacing: 0.025em;
`;
const StyledCVNoticeButton = styled(Button)`
  color: inherit;
`;
export const StyledCVNotice = Object.assign(StyledCVNoticeBase, {
  Typography: StyledCVNoticeTypography,
  Button: StyledCVNoticeButton,
});

const StyledNavigationBase = styled.ul`
  display: flex;
  flex-flow: column;
  gap: ${({ theme }) => theme.sizes("xs")};
  grid-area: 2 / 1 / 4 / 2;
  align-self: start;

  @media ${({ theme }) => theme.breakpoints("lg")} {
    align-self: end;
  }
`;
const StyledNavigationItem = styled.li`
  ${({ theme }) => theme.typography.md};
  transition-property: transform;

  &:hover {
    transform: translateX(${({ theme }) => theme.sizes("xxs")});
  }
`;
export const StyledNavigation = Object.assign(StyledNavigationBase, {
  Item: StyledNavigationItem,
});

const StyledSignatureBase = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;
  gap: ${({ theme }) => theme.sizes("xs")};
  color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.breakpoints("md")} {
    align-items: end;
    align-self: end;
    flex-flow: column;
    position: absolute;
    bottom: 0;
  }

  @media ${({ theme }) => theme.breakpoints("lg")} {
    position: relative;
  }
`;
const StyledSignatureTypography = styled.p`
  ${({ theme }) => theme.typography.sm};
`;
const StyledSignatureLogo = styled(Logo)`
  color: ${({ theme }) => theme.colors.white};
  width: 32px;
  height: 32px;

  @media ${({ theme }) => theme.breakpoints("md")} {
    width: 56px;
    height: 56px;
  }
`;
export const StyledSignature = Object.assign(StyledSignatureBase, {
  Logo: StyledSignatureLogo,
  Typography: StyledSignatureTypography,
});

export const StyledEstimationButton = styled(Button)`
  white-space: nowrap;
  align-self: stretch;
  margin-left: ${({ theme }) => theme.sizes("xxs")};
  margin-right: ${({ theme }) => theme.sizes("xxs")};

  @media ${({ theme }) => theme.breakpoints("md")} {
    align-self: start;
    margin-left: 4px;
    margin-right: 4px;
  }
`;

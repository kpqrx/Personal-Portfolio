import Icon from "@/components/Icon";
import Slider from "@/components/Slider";
import styled from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  padding: ${({ theme }) => theme.sizes("lg", "xxxs")};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray[800]};
  overflow-x: hidden;

  @media ${({ theme }) => theme.breakpoints("md")} {
    padding: ${({ theme }) => theme.sizes("lg", "xl")};
  }
  @media ${({ theme }) => theme.breakpoints("xl")} {
    padding: ${({ theme }) => theme.sizes("xxxl")};
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.sizes("lg")};
  justify-content: space-between;
  height: 100%;
  max-width: ${({ theme }) => theme.screens.xl};
  margin: 0 auto;
`;

const StyledHeadingBase = styled.div`
  position: relative;
  flex-basis: 100%;
  display: flex;
  flex-flow: column;
  gap: ${({ theme }) => theme.sizes("xxxs")};

  @media ${({ theme }) => theme.breakpoints("lg")} {
    flex-basis: min(435px, 50%);
  }
`;

const StyledHeadingPrimary = styled.h2`
  ${({ theme }) => theme.typography.lg};
`;
const StyledHeadingSecondary = styled.span`
  ${({ theme }) => theme.typography.md};
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const StyledHeading = Object.assign(StyledHeadingBase, {
  Primary: StyledHeadingPrimary,
  Secondary: StyledHeadingSecondary,
});

export const StyledParagraphWrapper = styled.div`
  position: relative;
  flex: 1;
`;

export const StyledParagraph = styled.p`
  ${({ theme }) => theme.typography.sm};
  margin-bottom: ${({ theme }) => theme.sizes("xs")};

  &::last-of-type {
    margin-bottom: 0;
  }
`;

export const StyledHeadingDecorator = styled(Icon)`
  position: absolute;
  inset: 0;
  stroke-width: 1px;
  stroke-opacity: 0.125;
  transform-origin: right;

  &::last-of-type {
    transform: translateX(75%) translateY(-${({ theme }) => theme.sizes("xs")});
  }
`;

export const StyledSlider = styled(Slider)`
  gap: ${({ theme }) => theme.sizes("lg")};
`;

const StyledSliderCardBase = styled.article`
  display: flex;
  flex-flow: column;
  gap: ${({ theme }) => theme.sizes("xxs")};
  padding: ${({ theme }) => theme.sizes("xs", "sm")};
  border-radius: ${({ theme }) => theme.sizes("xs")};
  background-color: ${({ theme }) => theme.colors.gray[700]};
  min-width: clamp(375px, 40%, 375px);
`;

const StyledSliderCardHeading = styled.h3`
  ${({ theme }) => theme.typography.md};
`;

const StyledSliderCardContent = styled.p`
  color: ${({ theme }) => theme.colors.text.tertiary};
  ${({ theme }) => theme.typography.sm};
`;

export const StyledSliderCard = Object.assign(StyledSliderCardBase, {
  Heading: StyledSliderCardHeading,
  Content: StyledSliderCardContent,
});

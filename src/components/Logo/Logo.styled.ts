import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes("xxs")};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const StyledSvg = styled.svg`
  stroke: currentColor;
  stroke-width: 2px;
  width: 56px;
  height: 56px;
  fill: none;
`;

const StyledTypographyBase = styled.p`
  ${({ theme }) => theme.typography.sm};
`;

const StyledTypographySubtitle = styled.span`
  ${({ theme }) => theme.typography.xs};
  display: block;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.text.tertiary};
  line-height: 1;
`;

export const StyledTypography = Object.assign(StyledTypographyBase, {
  Subtitle: StyledTypographySubtitle,
});

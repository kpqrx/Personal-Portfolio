import Icon from "@/components/Icon";
import Link from "next/link";
import styled from "styled-components";

export const StyledLabel = styled.h3`
  ${({ theme }) => theme.typography.md};
  transform-origin: left bottom;
  transition-property: transform;
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  right: ${({ theme }) => theme.sizes("md")};
  bottom: ${({ theme }) => theme.sizes("md")};
  width: ${({ theme }) => theme.sizes("md")};
  height: ${({ theme }) => theme.sizes("md")};
  margin: -${({ theme }) => theme.sizes("xxs")};
  stroke-width: 1px;
  transition-property: transform;
  transform-origin: left top;
`;

export const StyledContainer = styled(Link)`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text.secondary};
  padding: ${({ theme }) => theme.sizes("md")};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  position: relative;

  &:hover,
  &:focus-within {
    ${StyledIcon},
    ${StyledLabel} {
      transform: scale(1.15);
    }
  }
`;

export const StyledCategory = styled.li`
  border: 2px solid currentColor;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.sizes("xxxs", "xs")};
`;

export const StyledCategoryWrapper = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.sizes("xxs")};
`;

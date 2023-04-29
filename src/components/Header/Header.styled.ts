import Logo from "@/components/Logo";
import styled from "styled-components";

export const StyledContainer = styled.header`
  position: fixed;
  width: 100%;
  padding: ${({ theme }) => theme.sizes("xxs")};
  color: ${({ theme }) => theme.colors.text.primary};
  z-index: 20;
  backdrop-filter: blur(24px);

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

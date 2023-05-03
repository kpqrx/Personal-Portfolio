import styled from "styled-components";
import { m } from "framer-motion";

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
  width: 100%;
  height: 100%;
`;
export const StyledWrapper = styled(m.div)`
  display: flex;
  gap: ${({ theme }) => theme.sizes("lg")};
  justify-content: space-between;
  height: 100%;
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes("md")};
  align-self: end;
`;

export const StyledButton = styled.button`
  color: inherit;
  padding: ${({ theme }) => theme.sizes("xxs")};
`;

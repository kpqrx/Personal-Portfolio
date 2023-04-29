import {
  StyledWrapper,
  StyledLogo,
  StyledContainer,
} from "@/components/Header/Header.styled";
import Navigation from "@/components/Navigation";

function Header() {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledLogo />
        <Navigation />
      </StyledWrapper>
    </StyledContainer>
  );
}

export default Header;

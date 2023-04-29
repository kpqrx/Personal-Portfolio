import {
  StyledContent,
  StyledWrapper,
  StyledSeparator,
  StyledLinksWrapper,
  StyledCTAButton,
  StyledContainer,
  StyledTypography,
} from "@/components/HeroSection/HeroSection.styled";
import IconButton from "@/components/IconButton";
import Logo from "@/components/Logo";

function HeroSection() {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledContent>
          <StyledTypography>
            <StyledTypography.Wrapper>
              Rzetelność.
              <br />
              <StyledTypography.Stroke>Kreatywność.</StyledTypography.Stroke>
              <br />
              Perfekcja.
            </StyledTypography.Wrapper>
          </StyledTypography>
          <StyledSeparator />
          <Logo withTypography />
          <StyledLinksWrapper>
            <IconButton label="LinkedIn" icon="linkedin" anchorPoint="left" />
            <IconButton label="GitHub" icon="github" anchorPoint="left" />
          </StyledLinksWrapper>
        </StyledContent>
        <StyledCTAButton>
          <StyledCTAButton.Text>Przejdź dalej</StyledCTAButton.Text>
        </StyledCTAButton>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default HeroSection;

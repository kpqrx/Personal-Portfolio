import {
  StyledContainer,
  StyledHeading,
  StyledEstimationButton,
  StyledCVNotice,
  StyledNavigation,
  StyledWrapper,
  StyledSignature,
} from "@/components/Footer/Footer.styled";

function Footer() {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledHeading>
          <StyledHeading.Primary>
            Zainteresowany współpracą?
          </StyledHeading.Primary>
          <StyledHeading.Secondary>Zapytaj o wycenę</StyledHeading.Secondary>
        </StyledHeading>
        <StyledEstimationButton variant="tertiary">
          Uzyskaj wycenę
        </StyledEstimationButton>
        <StyledCVNotice>
          <StyledCVNotice.Typography>
            Rekruterze, rzuć okiem na moje CV!
          </StyledCVNotice.Typography>
          <StyledCVNotice.Button>Wyświetl CV</StyledCVNotice.Button>
        </StyledCVNotice>
        <StyledNavigation>
          <StyledNavigation.Item>Strona główna</StyledNavigation.Item>
          <StyledNavigation.Item>O mnie</StyledNavigation.Item>
          <StyledNavigation.Item>Portfolio</StyledNavigation.Item>
          <StyledNavigation.Item>Kontakt</StyledNavigation.Item>
        </StyledNavigation>
        <StyledSignature>
          <StyledSignature.Logo />
          <StyledSignature.Typography>
            Kamil Pyszkowski &copy; {new Date().getFullYear()}
          </StyledSignature.Typography>
        </StyledSignature>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default Footer;

import {
  StyledContainer,
  StyledHeading,
  StyledEstimationButton,
  StyledCVNotice,
  StyledNavigation,
  StyledWrapper,
  StyledSignature,
} from "@/components/Footer/Footer.styled";
import Link from "next/link";

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
          <StyledNavigation.Item>
            <Link href="#">Strona główna</Link>
          </StyledNavigation.Item>
          <StyledNavigation.Item>
            <Link href="#">O mnie</Link>
          </StyledNavigation.Item>
          <StyledNavigation.Item>
            <Link href="#">Portfolio</Link>
          </StyledNavigation.Item>
          <StyledNavigation.Item>
            <Link href="#">Kontakt</Link>
          </StyledNavigation.Item>
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

import {
  StyledWrapper,
  StyledLogo,
  StyledContainer,
} from "@/components/Header/Header.styled";
import Navigation from "@/components/Navigation";
import { useScroll, useTransform } from "framer-motion";

function Header() {
  const { scrollYProgress } = useScroll();
  const scrollModifier = useTransform(scrollYProgress, [0, 0.35], [0, 1]);

  return (
    <StyledContainer style={{ "--scroll-modifier": scrollModifier } as any}>
      <StyledWrapper>
        <StyledLogo />
        <Navigation />
      </StyledWrapper>
    </StyledContainer>
  );
}

export default Header;

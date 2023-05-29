import {
  StyledWrapper,
  StyledLogo,
  StyledContainer,
} from "@/components/Header/Header.styled";
import type { HeaderProps } from "@/components/Header/Header.types";
import Navigation from "@/components/Navigation";
import { ThemeContext } from "@/theme";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useContext, useRef } from "react";

function Header(props: HeaderProps) {
  const { invertRefs = [] } = props;
  const { scrollYProgress, scrollY } = useScroll();
  const scrollModifier = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const { isDarkModeEnabled, isHeaderInverted, toggleHeaderInverted } =
    useContext(ThemeContext);
  const containerRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", () => {
    if (!containerRef.current) {
      return;
    }

    const { height: headerHeight } =
      containerRef.current.getBoundingClientRect();

    invertRefs.forEach((ref) => {
      if (!ref.current) {
        return;
      }

      console.log(ref.current);

      const { top, height } = ref.current.getBoundingClientRect();
      const toggleThreshold = -top + headerHeight * 0.5;
      const isHeaderIntersectingToggleArea =
        toggleThreshold > 0 && toggleThreshold < height;

      if (isHeaderIntersectingToggleArea) {
        !isHeaderInverted && toggleHeaderInverted();
        return;
      }

      if (isHeaderInverted) {
        toggleHeaderInverted();
      }
    });
  });

  return (
    <StyledContainer
      ref={containerRef}
      style={{ "--scroll-modifier": scrollModifier } as any}
      $isColorInverted={!isDarkModeEnabled && isHeaderInverted}
    >
      <StyledWrapper>
        <StyledLogo />
        <Navigation />
      </StyledWrapper>
    </StyledContainer>
  );
}

export default Header;

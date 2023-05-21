import {
  StyledContainer,
  StyledHeadingDecorator,
  StyledHeading,
  StyledParagraph,
  StyledParagraphWrapper,
  StyledWrapper,
  StyledSlider,
  StyledSliderCard,
} from "@/components/AboutSection/AboutSection.styled";
import { forwardRef } from "react";

const sliderItems = [
  {
    label: "React",
    content:
      "Swobodnie korzystam z Hooks API, stosuje liczne wzorce projektowe oraz znam i wykorzystuję popularne biblioteki.",
  },
  {
    label: "React",
    content:
      "Swobodnie korzystam z Hooks API, stosuje liczne wzorce projektowe oraz znam i wykorzystuję popularne biblioteki.",
  },
  {
    label: "React",
    content:
      "Swobodnie korzystam z Hooks API, stosuje liczne wzorce projektowe oraz znam i wykorzystuję popularne biblioteki.",
  },
  {
    label: "React",
    content:
      "Swobodnie korzystam z Hooks API, stosuje liczne wzorce projektowe oraz znam i wykorzystuję popularne biblioteki.",
  },
  {
    label: "React",
    content:
      "Swobodnie korzystam z Hooks API, stosuje liczne wzorce projektowe oraz znam i wykorzystuję popularne biblioteki.",
  },
  {
    label: "React",
    content:
      "Swobodnie korzystam z Hooks API, stosuje liczne wzorce projektowe oraz znam i wykorzystuję popularne biblioteki.",
  },
  {
    label: "React",
    content:
      "Swobodnie korzystam z Hooks API, stosuje liczne wzorce projektowe oraz znam i wykorzystuję popularne biblioteki.",
  },
];

const AboutSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <StyledContainer {...props} ref={ref}>
      <StyledWrapper>
        <StyledHeading>
          <StyledHeading.Primary>Cześć</StyledHeading.Primary>
          <StyledHeading.Secondary>
            Pozwól, że się przedstawię
          </StyledHeading.Secondary>
          <StyledHeadingDecorator
            name="triangle"
            size={148}
            stroke="url(#gradient)"
          />
          <StyledHeadingDecorator
            name="triangle"
            size={192}
            color="tertiary"
            strokeDasharray="4"
          />
        </StyledHeading>
        <StyledParagraphWrapper>
          <StyledParagraph>
            Nazywam się Kamil Pyszkowski i jestem Frontend Developerem.
          </StyledParagraph>
          <StyledParagraph>
            Nieustannie szlifuję swój warsztat odkrywając i doskonaląc
            umiejętności języka JavaScript. Stawiam na niezawodność i
            nowoczesność.
          </StyledParagraph>
          <StyledParagraph>
            W implementowanych rozwiązaniach dbam o wykorzystanie wzorców
            projektowych oraz najnowszych funkcjonalności ECMAScript dbając
            równocześnie o czytelność i czystość kodu.
          </StyledParagraph>
        </StyledParagraphWrapper>
        <StyledSlider>
          {sliderItems.map(({ label, content }, index) => (
            <StyledSliderCard key={index}>
              <StyledSliderCard.Heading>{label}</StyledSliderCard.Heading>
              <StyledSliderCard.Content>{content}</StyledSliderCard.Content>
            </StyledSliderCard>
          ))}
        </StyledSlider>
      </StyledWrapper>
    </StyledContainer>
  );
});

AboutSection.displayName = "AboutSection";
export default AboutSection;

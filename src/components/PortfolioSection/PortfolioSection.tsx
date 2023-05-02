import Button from "@/components/Button";
import {
  StyledContainer,
  StyledWrapper,
  StyledFiltersWrapper,
  StyledProjectsList,
  StyledProjectsListItem,
  StyledHeading,
  StyledProgressWrapper,
} from "@/components/PortfolioSection/PortfolioSection.styled";
import React from "react";

function PortfolioSection() {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledHeading>Portfolio</StyledHeading>
        <StyledFiltersWrapper>
          <Button variant="secondary">Frontend</Button>
          <Button variant="secondary">Backend</Button>
          <Button variant="secondary">UX Design</Button>
          <Button variant="secondary">UI Design</Button>
          <Button variant="secondary">Infrastructure</Button>
        </StyledFiltersWrapper>
        <StyledProjectsList>
          <StyledProjectsListItem />
          <StyledProjectsListItem />
          <StyledProjectsListItem />
          <StyledProjectsListItem />
          <StyledProjectsListItem />
        </StyledProjectsList>
        <StyledProgressWrapper>
          <p>Wyświetlono 5 z 18 projektów.</p>
          <Button>Zobacz więcej</Button>
        </StyledProgressWrapper>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default PortfolioSection;

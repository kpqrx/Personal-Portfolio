import Button from "@/components/Button";
import {
  StyledContainer,
  StyledWrapper,
  StyledFiltersWrapper,
  StyledTilesList,
  StyledTilesItem,
  StyledPortfolioTile,
  StyledHeading,
  StyledProgressWrapper,
} from "@/components/PortfolioSection/PortfolioSection.styled";
import { ThemeContext } from "@/theme";
import React, { useContext } from "react";

function PortfolioSection() {
  const { isDarkModeEnabled } = useContext(ThemeContext);

  return (
    <StyledContainer $isDarkModeEnabled={isDarkModeEnabled}>
      <StyledWrapper>
        <StyledHeading>Portfolio</StyledHeading>
        <StyledFiltersWrapper>
          <Button variant="secondary">Frontend</Button>
          <Button variant="secondary">Backend</Button>
          <Button variant="secondary">UX Design</Button>
          <Button variant="secondary">UI Design</Button>
          <Button variant="secondary">Infrastructure</Button>
        </StyledFiltersWrapper>
        <StyledTilesList>
          <StyledTilesItem>
            <StyledPortfolioTile
              label="Personal Portfolio"
              categories={["Frontend", "UI Design"]}
              href=""
            />
          </StyledTilesItem>
          <StyledTilesItem>
            <StyledPortfolioTile
              label="Personal Portfolio"
              categories={["Frontend", "UI Design"]}
              href=""
            />
          </StyledTilesItem>
          <StyledTilesItem>
            <StyledPortfolioTile
              label="Personal Portfolio"
              categories={["Frontend", "UI Design"]}
              href=""
            />
          </StyledTilesItem>
          <StyledTilesItem>
            <StyledPortfolioTile
              label="Personal Portfolio"
              categories={["Frontend", "UI Design"]}
              href=""
            />
          </StyledTilesItem>
          <StyledTilesItem>
            <StyledPortfolioTile
              label="Personal Portfolio"
              categories={["Frontend", "UI Design"]}
              href=""
            />
          </StyledTilesItem>
        </StyledTilesList>
        <StyledProgressWrapper>
          <p>Wyświetlono 5 z 18 projektów.</p>
          <Button>Zobacz więcej</Button>
        </StyledProgressWrapper>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default PortfolioSection;

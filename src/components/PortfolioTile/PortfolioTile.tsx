import {
  StyledCategory,
  StyledCategoryWrapper,
  StyledContainer,
  StyledLabel,
  StyledIcon,
} from "@/components/PortfolioTile/PortfolioTile.styled";
import type { PortfolioTileProps } from "@/components/PortfolioTile/PortfolioTile.types";

function PortfolioTile(props: PortfolioTileProps) {
  const { label, categories, href, ...restProps } = props;

  return (
    <StyledContainer {...restProps} href={href}>
      <StyledCategoryWrapper>
        {categories.map((category, index) => (
          <StyledCategory key={index}>{category}</StyledCategory>
        ))}
      </StyledCategoryWrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledIcon name="arrow-down-right" />
    </StyledContainer>
  );
}

export default PortfolioTile;

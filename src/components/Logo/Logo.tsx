import {
  StyledContainer,
  StyledSvg,
  StyledTypography,
} from "@/components/Logo/Logo.styled";
import type { LogoProps } from "@/components/Logo/Logo.types";

function Logo(props: LogoProps) {
  const { withTypography = false, ...restProps } = props;

  return (
    <StyledContainer {...restProps}>
      <StyledSvg viewBox="0 0 64 64">
        <path
          d="M59.345 53.578 39.596 32l-10.505 9.651v21.767M59.345.582 29.74 29.26V.582S4.64.756 4.655 19.692c.011 14.2 15.962 16.963 15.962 16.963M12.8 57.6a4.655 4.655 0 1 0 0-9.31 4.655 4.655 0 0 0 0 9.31z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSvg>
      {withTypography && (
        <StyledTypography>
          Kamil Pyszkowski
          <StyledTypography.Subtitle>
            Frontend Developer
          </StyledTypography.Subtitle>
        </StyledTypography>
      )}
    </StyledContainer>
  );
}

export default Logo;

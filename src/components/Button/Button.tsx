import type { ButtonProps } from "@/components/Button/Button.types";
import { StyledButton } from "@/components/Button/Button.styled";

function Button(props: ButtonProps) {
  const { children, variant = "primary", ...restProps } = props;
  return (
    <StyledButton variant={variant} {...restProps}>
      {children}
    </StyledButton>
  );
}

export default Button;

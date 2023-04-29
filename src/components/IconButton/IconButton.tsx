import Icon from "@/components/Icon";
import type { IconButtonProps } from "@/components/IconButton/IconButton.types";
import {
  StyledContainer,
  StyledTooltip,
} from "@/components/IconButton/IconButton.styled";

const variants = {
  visible: {
    y: "100%",
    opacity: 1,
    scale: 1,
  },
  hidden: {
    y: "50%",
    opacity: 0,
    scale: 0.75,
  },
};

function IconButton(props: IconButtonProps) {
  const { label, icon, anchorPoint = "center", ...restProps } = props;

  return (
    <StyledContainer
      initial="hidden"
      whileHover="visible"
      whileFocus="visible"
      {...restProps}
    >
      <Icon name={icon} />
      <StyledTooltip anchorPoint={anchorPoint} variants={variants}>
        {label}
      </StyledTooltip>
    </StyledContainer>
  );
}

export default IconButton;

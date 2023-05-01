import { useState, useMemo, useCallback } from "react";
import {
  StyledContainer,
  StyledIcon,
  StyledLabel,
} from "./ToggleButton.styled";
import type { ToggleButtonProps } from "@/components/ToggleButton/ToggleButton.types";

const iconVariants = {
  withLabels: {
    toggled: {
      x: "100%",
      scale: 1,
    },
    default: {
      x: 0,
      scale: 1,
    },
  },
  withoutLabels: {
    toggled: {
      rotate: -90,
      scale: 1,
    },
    default: {
      rotate: 0,
      scale: 1,
    },
  },
};

function ToggleButton(props: ToggleButtonProps) {
  const {
    isToggled: isToggledByDefault = false,
    onToggle,
    icons,
    labels = [],
  } = props;
  const [defaultIcon, toggledIcon] = icons;
  const [defaultLabel, toggledLabel] = labels;

  const [isToggled, setIsToggled] = useState(isToggledByDefault);

  const currentIcon = useMemo(
    () => (toggledIcon ? (isToggled ? toggledIcon : defaultIcon) : defaultIcon),
    [isToggled, toggledIcon, defaultIcon]
  );

  const handleClick = useCallback(() => {
    onToggle();
    setIsToggled((prevState) => !prevState);
  }, [onToggle, setIsToggled]);

  return (
    <StyledContainer onClick={handleClick}>
      <StyledIcon
        name={currentIcon}
        $isAbsolute={labels.length > 0}
        variants={
          iconVariants[labels.length > 0 ? "withLabels" : "withoutLabels"]
        }
        animate={isToggled ? "toggled" : "default"}
      />
      {labels.length > 0 && (
        <>
          <StyledLabel $isVisible={isToggled}>{defaultLabel}</StyledLabel>
          <StyledLabel $isVisible={!isToggled}>{toggledLabel}</StyledLabel>
        </>
      )}
    </StyledContainer>
  );
}

export default ToggleButton;

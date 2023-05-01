import { useEffect, useRef, useState } from "react";
import type { PropsWithChildren } from "react";
import { useAnimation } from "framer-motion";
import type { ResolvedValues } from "framer-motion";
import Icon from "@/components/Icon";
import {
  StyledContainer,
  StyledWrapper,
  StyledButtonsWrapper,
  StyledButton,
} from "@/components/Slider/Slider.styled";

function Slider(props: PropsWithChildren) {
  const { children, ...restProps } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [leftConstraint, setLeftConstraint] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [itemsGap, setItemsGap] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const xPos = useRef(0);
  const animation = useAnimation();

  const handleDragUpdate = (latest: ResolvedValues) => {
    xPos.current = +latest.x;
  };

  useEffect(() => {
    const getValues = () => {
      if (
        !(
          wrapperRef.current?.firstElementChild &&
          wrapperRef.current?.parentElement
        )
      ) {
        return;
      }

      const scrollWidth = wrapperRef.current?.scrollWidth;
      const width = wrapperRef.current.parentElement?.offsetWidth;
      const scrollOffset = wrapperRef.current.parentElement?.offsetLeft;
      const itemsGap = parseInt(
        getComputedStyle(wrapperRef.current).columnGap,
        10
      );
      const itemWidth = parseInt(
        getComputedStyle(wrapperRef.current.firstElementChild).width,
        10
      );

      setScrollWidth(scrollWidth);
      setScrollOffset(scrollOffset);
      setItemsGap(itemsGap);
      setItemWidth(itemWidth);
      setLeftConstraint(-scrollWidth + width);
    };

    window.addEventListener("resize", getValues);
    // TODO: implement debounce
    getValues();

    return () => window.removeEventListener("resize", getValues);
  }, [setLeftConstraint, setScrollWidth]);

  // TODO: implement throttling for slide control handlers
  const handleNext = () => {
    const currentXValue = xPos.current;

    console.log({
      currentXValue,
      leftConstraint,
      scrollWidth,
      scrollOffset,
      itemsGap,
      itemWidth,
      xd: leftConstraint - currentXValue,
    });

    if (Math.abs(leftConstraint - currentXValue + itemWidth) <= itemWidth) {
      console.log("elo");
      animation.start({ x: leftConstraint });
      return;
    }

    animation.start({ x: currentXValue - itemWidth - itemsGap });
  };

  const handlePrevious = () => {
    const currentXValue = xPos.current;

    if (
      currentXValue === 0 ||
      (currentXValue > 0 && currentXValue <= itemWidth)
    ) {
      return;
    }

    if (currentXValue === leftConstraint) {
      animation.start({
        x: currentXValue + itemWidth + itemsGap - scrollOffset,
      });
      return;
    }

    animation.start({
      x:
        currentXValue + itemWidth + itemsGap > 0 &&
        currentXValue + itemWidth + itemsGap < itemWidth
          ? 0
          : currentXValue + itemWidth + itemsGap + scrollOffset,
    });
  };

  return (
    <StyledContainer {...restProps}>
      <StyledWrapper
        ref={wrapperRef}
        drag="x"
        // TODO: fix corelation between touch and button action
        dragConstraints={{ right: 0, left: leftConstraint }}
        onUpdate={handleDragUpdate}
        animate={animation}
        style={{ width: scrollWidth }}
      >
        {children}
      </StyledWrapper>
      <StyledButtonsWrapper>
        <StyledButton onClick={handlePrevious}>
          <Icon name="arrow-left" size={36} />
        </StyledButton>
        <StyledButton onClick={handleNext}>
          <Icon name="arrow-right" size={36} />
        </StyledButton>
      </StyledButtonsWrapper>
    </StyledContainer>
  );
}

export default Slider;

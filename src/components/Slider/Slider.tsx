import {
  Children,
  cloneElement,
  createRef,
  useEffect,
  useRef,
  useState,
} from "react";
import type { PropsWithChildren } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import type { PanInfo } from "framer-motion";
import Icon from "@/components/Icon";
import {
  StyledContainer,
  StyledWrapper,
  StyledButtonsWrapper,
  StyledButton,
} from "@/components/Slider/Slider.styled";

function Slider(props: PropsWithChildren) {
  const { children, ...restProps } = props;
  const childrenRefs = Children.toArray(children).map(() => createRef());
  const childrenWithRefs = Children.map(children, (child, index) =>
    cloneElement(child, { ref: childrenRefs[index] })
  );

  const [slideWidths, setSlideWidths] = useState([]);

  console.log("rerender");

  useEffect(() => {
    const widths = childrenRefs.map((childRef) => {
      const { width } = childRef.current.getBoundingClientRect();
      return width;
    });

    setSlideWidths(widths);
  }, []);

  const scrollPositionSync = useMotionValue(0);
  const dragFlex = useMotionValue(0);

  const scrollPosition = useTransform(
    [scrollPositionSync, dragFlex],
    ([x, y]) => {
      return x * -(375 + 64) + y;
    }
  );
  const scrollPositionSpring = useSpring(scrollPosition, {
    stiffness: 350,
    damping: 15,
    mass: 0.25,
  });

  const handlePanEnd = (_, info: PanInfo) => {
    const { offset } = info;

    const sliderPostionOffset = Math.floor(Math.abs(offset.x) / (375 / 4));

    scrollPositionSync.set(
      scrollPositionSync.get() +
        (offset.x > 0 ? -sliderPostionOffset : sliderPostionOffset)
    );
    dragFlex.set(0);
  };

  const handlePan = (event: PointerEvent, info: PanInfo) => {
    event.preventDefault();

    const { offset } = info;

    dragFlex.set(offset.x);
  };

  const handleNext = () => {
    if (scrollPositionSync.get() === slideWidths.length - 1) {
      return;
    }

    scrollPositionSync.set(scrollPositionSync.get() + 1);
  };
  const handlePrevious = () => {
    if (scrollPositionSync.get() === 0) {
      return;
    }

    scrollPositionSync.set(scrollPositionSync.get() - 1);
  };

  return (
    <StyledContainer {...restProps}>
      <StyledWrapper
        onPan={handlePan}
        onPanEnd={handlePanEnd}
        style={{
          x: scrollPositionSpring,
          touchAction: "none",
        }}
      >
        {childrenWithRefs}
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

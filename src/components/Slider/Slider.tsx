import {
  Children,
  cloneElement,
  createRef,
  useEffect,
  useState,
  isValidElement,
} from "react";
import type {
  PropsWithChildren,
  HTMLProps,
  ReactNode,
  DetailedReactHTMLElement,
} from "react";
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
  const childrenRefs = Children.toArray(children).map(() =>
    createRef<HTMLElement>()
  );
  const childrenWithRefs = Children.map(
    children,
    (child: ReactNode, index: number) => {
      if (isValidElement(child)) {
        return cloneElement<HTMLProps<HTMLElement>, HTMLElement>(
          child as DetailedReactHTMLElement<
            HTMLProps<HTMLElement>,
            HTMLElement
          >,
          {
            ref: childrenRefs[index],
          }
        );
      }
      return child;
    }
  );

  const [slideWidths, setSlideWidths] = useState<number[]>([]);

  useEffect(() => {
    const widths = childrenRefs.map((childRef) => {
      const { width } = childRef.current?.getBoundingClientRect() || {
        width: 0,
      };
      return width;
    });

    setSlideWidths(widths);
  }, []);

  const scrollPositionSync = useMotionValue(0);
  const dragFlex = useMotionValue(0);

  const scrollPosition = useTransform(
    [scrollPositionSync, dragFlex],
    ([x, y]: number[]) => {
      return x * -(375 + 64) + y;
    }
  );
  const scrollPositionSpring = useSpring(scrollPosition, {
    stiffness: 350,
    damping: 15,
    mass: 0.25,
  });

  const handlePanEnd = (event: PointerEvent, info: PanInfo) => {
    const { offset } = info;

    const newScrollPositionSync =
      scrollPositionSync.get() + (offset.x > 0 ? -1 : 1);

    const isEdgeReached =
      newScrollPositionSync < 0 ||
      newScrollPositionSync > childrenRefs.length - 1;

    console.log({
      ox: offset.x,
      c: scrollPositionSync.get(),
      chi: childrenRefs.length,
    });

    if (!isEdgeReached) {
      scrollPositionSync.set(newScrollPositionSync);
    }

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

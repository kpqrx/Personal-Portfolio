import { m } from "framer-motion";
import type {
  NavigationListProps,
  NavigationToggleButtonProps,
  NavigationItemProps,
} from "@/components/Navigation/Navigation.types";
import {
  StyledNavigationList,
  StyledNavigationItem,
  StyledNavigationToggleButton,
  StyledNavigationLink,
  StyledNavigationItemIcon,
} from "@/components/Navigation/Navigation.styled";
import Icon from "@/components/Icon";

const buttonPathsVariants = {
  top: {
    initial: {
      d: "M1 5h22l1 1-1 1H1L0 6l1-1Z",
    },
    open: {
      d: "M4 19 19 4h1v1L5 20H4v-1Z",
    },
    closed: {
      d: "M3 5h20l1 1-1 1H3L2 6l1-1z",
    },
  },
  bottom: {
    initial: {
      d: "M2 17h20l2 1-2 1H2l-2-1 2-1z",
    },
    open: {
      d: "m5 4 15 15v1h-1L4 5V4h1Z",
    },
    closed: {
      d: "M10 17h13l1 1-1 1H10l-1-1 1-1z",
    },
  },
};

export function NavigationToggleButton(props: NavigationToggleButtonProps) {
  const { onClick } = props;

  return (
    <StyledNavigationToggleButton onClick={onClick}>
      <svg viewBox="0 0 24 24" width="24" height="24">
        <m.path variants={buttonPathsVariants.top} />
        <m.path variants={buttonPathsVariants.bottom} />
      </svg>
    </StyledNavigationToggleButton>
  );
}

export function NavigationList(props: NavigationListProps) {
  const { items } = props;
  return (
    <StyledNavigationList>
      {items.map((item, index) => (
        <NavigationItem key={index} {...item} />
      ))}
    </StyledNavigationList>
  );
}

export function NavigationItem(props: NavigationItemProps) {
  const { icon, label, href } = props;
  return (
    <StyledNavigationItem>
      <StyledNavigationLink href={href}>
        <StyledNavigationItemIcon name={icon} gradientStroke />
        <span>{label}</span>
      </StyledNavigationLink>
    </StyledNavigationItem>
  );
}

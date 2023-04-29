import type { IconNameType } from "@/components/Icon/Icon.types";

export interface NavigationToggleButtonProps {
  onClick: () => void;
}

export interface NavigationItemProps {
  icon: IconNameType;
  label: string;
  href: string;
}

export interface NavigationListProps {
  items: NavigationItemProps[];
}

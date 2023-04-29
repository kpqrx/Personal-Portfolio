import type { IconNameType } from "../Icon/Icon.types";

export interface ToggleButtonProps {
  isToggled?: boolean;
  onToggle: () => void;
  icons: [IconNameType] | [IconNameType, IconNameType];
  labels?: [string, string];
}

import {
  NavigationList,
  NavigationToggleButton,
} from "@/components/Navigation/Navigation.children";
import {
  StyledContainer,
  StyledNavigationWrapper,
  StyledTogglersContainer,
} from "@/components/Navigation//Navigation.styled";
import { useCycle } from "framer-motion";
import type { NavigationItemProps } from "@/components/Navigation/Navigation.types";
import ToggleButton from "@/components/ToggleButton";

const navigationItems: NavigationItemProps[] = [
  { label: "Strona główna", icon: "home", href: "#" },
  { label: "O mnie", icon: "user", href: "#" },
  { label: "Portfolio", icon: "pen-tool", href: "#" },
  { label: "Kontakt", icon: "mail", href: "#" },
];

function Navigation() {
  const [isToggled, handleToggle] = useCycle(false, true);

  return (
    <StyledContainer animate={isToggled ? "open" : "closed"} initial="initial">
      <NavigationToggleButton onClick={() => handleToggle()} />
      <StyledNavigationWrapper isToggled={isToggled}>
        <NavigationList items={navigationItems} />
        <StyledTogglersContainer>
          <ToggleButton
            onToggle={() => console.log("Toggled")}
            icons={["globe"]}
            labels={["EN", "PL"]}
          />
          <ToggleButton
            onToggle={() => console.log("Toggled")}
            icons={["moon", "sun"]}
          />
        </StyledTogglersContainer>
      </StyledNavigationWrapper>
    </StyledContainer>
  );
}

export default Navigation;

import { Building2, LayoutGrid } from "lucide-react";
import { MenuContainer } from "./menuContainer";
import { MenuLink } from "./menuLink";

function Menu() {
  return (
    <MenuContainer>
      <MenuLink to="/customer/dashboard" icon={LayoutGrid}>
        Dashboard
      </MenuLink>
      <MenuLink to="/customer/properties" icon={Building2}>
        Imóveis
      </MenuLink>
    </MenuContainer>
  );
}

export { Menu };

import { Building2, Users, Wallet, BookUser, LayoutGrid } from "lucide-react";
import { MenuContainer } from "./menuContainer";
import { MenuLink } from "./menuLink";

function Menu() {
  return (
    <MenuContainer>
      <MenuLink to="/panel/dashboard" icon={LayoutGrid}>
        Dashboard
      </MenuLink>
      <MenuLink to="/panel/properties" icon={Building2}>
        Imóveis
      </MenuLink>
      <MenuLink to="/panel/wallets" icon={Wallet}>
        Carteira de imóveis
      </MenuLink>
      <MenuLink to="/panel/property-owners" icon={BookUser}>
        Proprietários
      </MenuLink>
      <MenuLink to="/panel/customers" icon={Users}>
        Usuários
      </MenuLink>
    </MenuContainer>
  );
}

export { Menu };

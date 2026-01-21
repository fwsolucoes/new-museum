import { Building2, Users, Wallet, BookUser, LayoutGrid } from "lucide-react";
import { MenuContainer } from "./menuContainer";
import { MenuLink } from "./menuLink";

function Menu() {
  return (
    <MenuContainer>
      <MenuLink to="/admin/dashboard" icon={LayoutGrid}>
        Dashboard
      </MenuLink>
      <MenuLink to="/admin/properties" icon={Building2}>
        Imóveis
      </MenuLink>
      <MenuLink to="/admin/wallets" icon={Wallet}>
        Carteira de imóveis
      </MenuLink>
      <MenuLink to="/admin/property-owners" icon={BookUser}>
        Proprietários
      </MenuLink>
      <MenuLink to="/admin/customers" icon={Users}>
        Usuários
      </MenuLink>
    </MenuContainer>
  );
}

export { Menu };

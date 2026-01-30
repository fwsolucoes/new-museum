import { ImagePlus, Images } from "lucide-react";
import { MenuContainer } from "./menuContainer";
import { MenuLink } from "./menuLink";

function Menu() {
  return (
    <MenuContainer>
      <MenuLink to="/panel/items" icon={Images}>
        Itens
      </MenuLink>
      <MenuLink to="/panel/item/new" icon={ImagePlus}>
        Adicionar item
      </MenuLink>
    </MenuContainer>
  );
}

export { Menu };

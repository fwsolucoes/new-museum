import { Popover } from "@arkyn/components";
import { LogOut } from "lucide-react";
import { useFetcher } from "react-router";

import { useUser } from "~/client/hooks/useUser";
import {
  IconMenuContainer,
  NavigationButton,
  PopoverFooter,
  PopoverHeader,
} from "./styles";

function IconMenu() {
  const { user } = useUser();
  const { submit } = useFetcher();

  function handleLogout() {
    submit(null, {
      method: "post",
      action: "/api/logout-user",
    });
  }

  return (
    <Popover
      closeOnClick
      button={
        <IconMenuContainer>
          <img src={user.avatar} alt={user.name} />
        </IconMenuContainer>
      }
    >
      <PopoverHeader>
        <strong>{user.name}</strong>
        <small>{user.email}</small>
      </PopoverHeader>

      <PopoverFooter>
        <NavigationButton className="danger" onClick={handleLogout}>
          <LogOut />
          Sair
        </NavigationButton>
      </PopoverFooter>
    </Popover>
  );
}

export { IconMenu };

import { Button, useModal } from "@arkyn/components";
import { Plus } from "lucide-react";
import { Container } from "./styles";

function Header() {
  const { openModal } = useModal("create-wallet");

  return (
    <Container>
      <h1>Carteiras de imóveis</h1>
      <Button leftIcon={Plus} onClick={openModal}>
        Adicionar
      </Button>
    </Container>
  );
}

export { Header };

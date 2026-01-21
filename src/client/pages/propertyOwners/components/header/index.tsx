import { Button, useModal } from "@arkyn/components";
import { Plus } from "lucide-react";
import { Container } from "./styles";

function Header() {
  const { openModal } = useModal("create-property-owner");

  return (
    <Container>
      <h1>Proprietários</h1>
      <Button leftIcon={Plus} onClick={openModal}>
        Adicionar
      </Button>
    </Container>
  );
}

export { Header };

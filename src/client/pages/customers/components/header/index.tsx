import { Button, useModal } from "@arkyn/components";
import { ArrowLeft, Plus } from "lucide-react";
import { useNavigate } from "react-router";
import { Container } from "./styles";

function Header() {
  const { openModal } = useModal("create-customer");
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Usuários</h1>

      <Button
        variant="outline"
        leftIcon={ArrowLeft}
        onClick={() => navigate(-1)}
      >
        Voltar
      </Button>

      <Button leftIcon={Plus} onClick={openModal}>
        Adicionar
      </Button>
    </Container>
  );
}

export { Header };

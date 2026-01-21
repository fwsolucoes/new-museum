import { Button } from "@arkyn/components";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router";
import { Container } from "./styles";

function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Itens</h1>

      <Button
        leftIcon={Plus}
        onClick={() => navigate(`/panel/properties/create`)}
      >
        Adicionar
      </Button>
    </Container>
  );
}

export { Header };

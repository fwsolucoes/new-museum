import { Button } from "@arkyn/components";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router";
import { useUser } from "~/client/hooks/useUser";
import { Container } from "./styles";

function Header() {
  const navigate = useNavigate();
  const { showTo } = useUser();

  return (
    <Container>
      <h1>Lista de imóveis</h1>

      {showTo("admin") && (
        <Button
          leftIcon={Plus}
          onClick={() => navigate(`/panel/properties/create`)}
        >
          Adicionar
        </Button>
      )}
    </Container>
  );
}

export { Header };

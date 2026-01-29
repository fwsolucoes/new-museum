import { Button } from "@arkyn/components";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { Container } from "./styles";

function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Detalhes</h1>

      <Button onClick={() => navigate(-1)} leftIcon={ArrowLeft}>
        Voltar
      </Button>
    </Container>
  );
}

export { Header };

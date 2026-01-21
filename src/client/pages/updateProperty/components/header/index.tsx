import { Button } from "@arkyn/components";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

import { Container } from "./styles";

function Header() {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  return (
    <Container>
      <h1>Atualizar imóvel</h1>
      <Button leftIcon={ArrowLeft} variant="outline" onClick={handleGoBack}>
        Voltar
      </Button>
    </Container>
  );
}

export { Header };

import { Button } from "@arkyn/components";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router";
import { Container } from "./styles";

function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Adicionar item</h1>
    </Container>
  );
}

export { Header };

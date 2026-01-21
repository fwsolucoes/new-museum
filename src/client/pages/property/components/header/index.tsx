import { Button } from "@arkyn/components";
import { ChevronLeft, PencilLine } from "lucide-react";
import { useLoaderData, useNavigate } from "react-router";

import { useUser } from "~/client/hooks/useUser";
import type { PropertyLoader } from "~/client/types/propertyLoader";
import { Container } from "./styles";

function Header() {
  const loaderData = useLoaderData<PropertyLoader>();
  const navigate = useNavigate();
  const { showTo } = useUser();

  function handleBack() {
    navigate(-1);
  }

  function handleUpdate() {
    navigate(`update`);
  }

  return (
    <Container>
      <h1>Detalhes do imóvel - {loaderData.property.name}</h1>
      <Button leftIcon={ChevronLeft} variant="outline" onClick={handleBack}>
        Voltar
      </Button>

      {showTo("admin") && (
        <Button leftIcon={PencilLine} onClick={handleUpdate}>
          Atualizar imóvel
        </Button>
      )}
    </Container>
  );
}

export { Header };

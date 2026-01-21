import { CircleAlert, FileText } from "lucide-react";
import { useLoaderData } from "react-router";

import type { PropertyLoader } from "~/client/types/propertyLoader";
import { Container, EmptyContent, Header, TextContent } from "./styles";

function Contract() {
  const { property } = useLoaderData<PropertyLoader>();

  return (
    <Container>
      <Header>
        <FileText />
        <strong>Contrato</strong>
      </Header>

      {!property.contract && (
        <EmptyContent>
          <CircleAlert />
          <p>Contrato indisponível</p>
        </EmptyContent>
      )}

      {!!property.contract && (
        <TextContent>
          <small>Data de inicio</small>
          <p>{property.contract.startDate}</p>
        </TextContent>
      )}

      {!!property.contract && (
        <TextContent>
          <small>Data de fim</small>
          <p>{property.contract.endDate}</p>
        </TextContent>
      )}
    </Container>
  );
}

export { Contract };

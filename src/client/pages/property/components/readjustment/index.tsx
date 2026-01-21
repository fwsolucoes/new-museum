import { ChartLine, CircleAlert } from "lucide-react";
import { useLoaderData } from "react-router";

import type { PropertyLoader } from "~/client/types/propertyLoader";
import { Container, EmptyContent, Header, TextContent } from "./styles";

function Readjustment() {
  const { property } = useLoaderData<PropertyLoader>();

  return (
    <Container>
      <Header>
        <ChartLine />
        <strong>Reajuste</strong>
      </Header>

      {!property.contract && (
        <EmptyContent>
          <CircleAlert />
          <p>Reajuste indisponível</p>
        </EmptyContent>
      )}

      {!!property.contract && (
        <TextContent>
          <small>Índice de correção</small>
          <p>{property.contract.startDate}</p>
        </TextContent>
      )}

      {!!property.contract && (
        <TextContent>
          <small>Data do último reajuste</small>
          <p>{property.contract.endDate}</p>
        </TextContent>
      )}
    </Container>
  );
}

export { Readjustment };

import { Badge } from "@arkyn/components";
import { CircleAlert, ShieldCheck } from "lucide-react";
import { useLoaderData } from "react-router";

import type { PropertyLoader } from "~/client/types/propertyLoader";
import { Container, EmptyContent, Header, TextContent } from "./styles";

function Guarantee() {
  const { property } = useLoaderData<PropertyLoader>();

  const fireInsurance: any = {
    true: <Badge scheme="success">Ativo</Badge>,
    false: <Badge scheme="danger">Inativo</Badge>,
  };

  return (
    <Container>
      <Header>
        <ShieldCheck />
        <strong>Garantia</strong>
      </Header>

      {!property.contract && (
        <EmptyContent>
          <CircleAlert />
          <p>Garantia indisponível</p>
        </EmptyContent>
      )}

      {!!property.contract && (
        <TextContent>
          <small>Tipo de garantia</small>
          <p>{property.contract.guarantee}</p>
        </TextContent>
      )}

      {!!property.contract && (
        <TextContent>
          <small>Seguro incêndio</small>
          {fireInsurance[String(property.contract.fireInsurance)]}
        </TextContent>
      )}
    </Container>
  );
}

export { Guarantee };

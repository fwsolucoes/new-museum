import { Badge } from "@arkyn/components";
import { useLoaderData } from "react-router";
import type { PropertyLoader } from "~/client/types/propertyLoader";
import { Container, Footer, Header } from "./styles";
import { MapPin } from "lucide-react";
import { statusBadge } from "../../utilities/statusBadge";

function Information() {
  const { property } = useLoaderData<PropertyLoader>();

  return (
    <Container>
      <Header>
        <img src={property.image || undefined} alt={property.name} />
        <div>
          <h3>{property.name}</h3>
          <p>{property.description}</p>
          <p className="fullAddress">
            <MapPin />
            {property.fullAddress}
          </p>
        </div>
      </Header>
      <Footer>
        {statusBadge(property.status)}
        <div>
          <small>Carteira</small>
          <p>Nome da carteira</p>
        </div>
        <div>
          <small>Matricula</small>
          <p>{property.registration}</p>
        </div>
        <div>
          <small>Referencia externa</small>
          <p>{property.externalReference}</p>
        </div>
      </Footer>
    </Container>
  );
}

export { Information };

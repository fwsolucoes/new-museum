import { Button, IconButton, MapView, PlacesProvider } from "@arkyn/components";
import { X } from "lucide-react";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";

import { useRoot } from "~/client/hooks/useRoot";
import type { DashboardLoader } from "~/client/types/dashboardLoader";
import { statusBadge } from "../../utilities/statusBadge";
import { Container, Header, PropertyContainer } from "./styles";

function PropertiesMap() {
  const { propertyMapView } = useLoaderData<DashboardLoader>();
  const navigate = useNavigate();
  const { environmentVariables } = useRoot();

  const [infoWindowIndex, setInfoWindowIndex] = useState<number>();
  const openInfoWindow = (index: number) => setInfoWindowIndex(index);
  const closeInfoWindow = () => setInfoWindowIndex(undefined);

  function handleGoToPropertyDetails(id: string) {
    navigate(`/admin/properties/${id}`);
  }

  function mapCoordinates() {
    return propertyMapView.map((property) => ({
      lat: property.latitude,
      lng: property.longitude,
      children: (
        <PropertyContainer>
          <IconButton
            icon={X}
            aria-label="Fechar janela informativa"
            size="xs"
            variant="invisible"
            onClick={closeInfoWindow}
          />

          <img src={property.image} alt={property.name} />
          <strong>{property.name}</strong>
          <p>{property.fullAddress}</p>
          {statusBadge(property.status)}
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleGoToPropertyDetails(property.id)}
          >
            Ver detalhes do imóvel
          </Button>
        </PropertyContainer>
      ),
    }));
  }

  return (
    <Container>
      <Header>Localização dos imóveis</Header>

      <PlacesProvider apiKey={environmentVariables.GOOGLE_API_KEY}>
        {(isLoaded) =>
          isLoaded && (
            <MapView
              style={{ height: "100%", width: "100%" }}
              infoWindowIndex={infoWindowIndex}
              openInfoWindow={openInfoWindow}
              closeInfoWindow={closeInfoWindow}
              coordinates={mapCoordinates()}
            />
          )
        }
      </PlacesProvider>
    </Container>
  );
}

export { PropertiesMap };

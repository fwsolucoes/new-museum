import {
  Input,
  MapView,
  MaskedInput,
  PlacesProvider,
  SearchPlaces,
} from "@arkyn/components";
import { useState } from "react";
import { useLoaderData } from "react-router";

import { useRoot } from "~/client/hooks/useRoot";
import type { UpdatePropertyLoader } from "~/client/types/updatePropertyLoader";
import { Content } from "./styles";

type AddressProps = {
  street: string;
  city: string;
  state: string;
  neighborhood: string;
  postalCode: string;
  stateShortName: string;
  streetNumber: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};

function AddressForm() {
  const { property } = useLoaderData<UpdatePropertyLoader>();
  const { environmentVariables } = useRoot();

  const [address, setAddress] = useState<AddressProps | null>({
    city: property.city,
    coordinates: { lat: property.latitude, lng: property.longitude },
    neighborhood: property.neighborhood,
    postalCode: property.postalCode,
    state: property.state,
    stateShortName: property.state,
    street: property.street,
    streetNumber: property.streetNumber,
  });

  return (
    <Content>
      <h1>Endereço e localização</h1>

      <PlacesProvider apiKey={environmentVariables.GOOGLE_API_KEY}>
        {(isLoaded) =>
          isLoaded && (
            <main>
              <div className="address">
                <SearchPlaces
                  name="fullAddress"
                  label="Pesquisar endereço:"
                  placeholder="Escrever..."
                  showAsterisk
                  onChange={() => setAddress(null)}
                  onPlaceChanged={(data) => setAddress(data)}
                  defaultValue={property.fullAddress}
                />

                {!!address && (
                  <div className="addressDetails">
                    <h2>Detalhes do endereço</h2>

                    <div className="coordinates">
                      <Input
                        name="latitude"
                        label="Latitude:"
                        showAsterisk
                        readOnly={!!address.coordinates.lat}
                        defaultValue={String(address.coordinates.lat) || ""}
                      />
                      <Input
                        name="longitude"
                        label="Longitude:"
                        showAsterisk
                        readOnly={!!address.coordinates.lng}
                        defaultValue={String(address.coordinates.lng) || ""}
                      />
                    </div>

                    <div className="postalCode">
                      <MaskedInput
                        name="postalCode"
                        label="CEP:"
                        showAsterisk
                        readOnly={!!address.postalCode}
                        defaultValue={address.postalCode}
                        mask="_____-___"
                        replacement={{ _: /\d/ }}
                      />
                    </div>

                    <div className="streetAddress">
                      <Input
                        name="street"
                        label="Rua:"
                        showAsterisk
                        readOnly={!!address.street}
                        defaultValue={address.street}
                      />
                      <Input
                        name="number"
                        label="Número:"
                        showAsterisk
                        readOnly={!!address.streetNumber}
                        defaultValue={address.streetNumber}
                      />
                    </div>

                    <div className="neighborhoodInfo">
                      <Input
                        name="neighborhood"
                        label="Bairro:"
                        showAsterisk
                        readOnly={!!address.neighborhood}
                        defaultValue={address.neighborhood}
                      />
                      <Input
                        name="complement"
                        label="Complemento:"
                        showAsterisk
                        defaultValue={property.complement}
                      />
                    </div>

                    <div className="cityState">
                      <Input
                        name="city"
                        label="Cidade:"
                        showAsterisk
                        readOnly={!!address.city}
                        defaultValue={address.city}
                      />
                      <Input
                        name="state"
                        label="Estado:"
                        showAsterisk
                        readOnly={!!address.state}
                        defaultValue={address.state}
                      />
                    </div>
                  </div>
                )}
              </div>

              <MapView coordinates={address?.coordinates} />
            </main>
          )
        }
      </PlacesProvider>
    </Content>
  );
}

export { AddressForm };

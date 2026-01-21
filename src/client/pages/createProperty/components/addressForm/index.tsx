import {
  Input,
  MapView,
  MaskedInput,
  PlacesProvider,
  SearchPlaces,
} from "@arkyn/components";
import { useState } from "react";
import { useRoot } from "~/client/hooks/useRoot";
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
  const [address, setAddress] = useState<AddressProps>();
  const { environmentVariables } = useRoot();

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
                  onPlaceChanged={(data) => setAddress(data)}
                  showAsterisk
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

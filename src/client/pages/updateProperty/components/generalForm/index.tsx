import { ImageUpload, Input, Select, Textarea } from "@arkyn/components";
import { useLoaderData } from "react-router";

import type { UpdatePropertyLoader } from "~/client/types/updatePropertyLoader";
import { Content } from "./styles";

function GeneralForm() {
  const { wallets, property, propertyOwners } =
    useLoaderData<UpdatePropertyLoader>();

  function getWalletId() {
    const propertyOwner = propertyOwners.data.find(
      (propertyOwner) => propertyOwner.id === property.propertyOwnerId,
    );

    const wallet = wallets.data.find(
      (wallet) => wallet.id === propertyOwner?.walletId,
    );

    return wallet?.id;
  }

  return (
    <Content>
      <h1>Dados básicos</h1>

      <div className="imageInformation">
        <ImageUpload
          name="images"
          action="/api/file-upload"
          label="Foto do imóvel:"
          showAsterisk
          defaultValue={property.image}
        />

        <div className="information">
          <Select
            name="walletId"
            label="Carteira:"
            readOnly
            showAsterisk
            defaultValue={getWalletId()}
            options={wallets.data.map((wallet) => ({
              label: wallet.name,
              value: wallet.id,
            }))}
          />

          <Select
            name="propertyOwnerId"
            label="Proprietário:"
            showAsterisk
            readOnly
            defaultValue={property.propertyOwnerId}
            options={propertyOwners.data.map((propertyOwner) => ({
              label: propertyOwner.legalName,
              value: propertyOwner.id,
            }))}
          />

          <Select
            name="status"
            label="Status:"
            showAsterisk
            defaultValue={property.status}
            options={[
              { label: "Em regularização", value: "underRegularization" },
              { label: "Imóvel vendido", value: "sold" },
            ]}
          />

          <Input
            name="registration"
            label="Matrícula:"
            placeholder="Escreva aqui..."
            showAsterisk
            defaultValue={property.registration}
          />

          <Input
            name="reference"
            label="Código externo:"
            placeholder="Escreva aqui..."
            showAsterisk
            defaultValue={property.externalReference}
          />
        </div>
      </div>

      <div className="footerInformation">
        <Input
          name="name"
          label="Nome do imóvel:"
          placeholder="Escreva aqui..."
          showAsterisk
          defaultValue={property.name}
        />

        <Textarea
          name="description"
          label="Descrição:"
          placeholder="Escreva aqui..."
          showAsterisk
          rows={4}
          defaultValue={property.description}
        />
      </div>
    </Content>
  );
}

export { GeneralForm };

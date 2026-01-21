import { ImageUpload, Input, Select, Textarea } from "@arkyn/components";
import { useState } from "react";
import { useLoaderData } from "react-router";

import { ModalContent } from "~/client/pages/customers/components/createCustomer/styles";
import type { CreatePropertyLoader } from "~/client/types/createPropertyLoader";
import { Content } from "./styles";

function GeneralForm() {
  const { wallets, propertyOwners } = useLoaderData<CreatePropertyLoader>();
  const [walletId, setWalletId] = useState<string>("");

  function propertyOwnerOptions() {
    return propertyOwners.data
      .filter((e) => e.walletId === walletId)
      .map((owner) => ({
        label: owner.legalName,
        value: owner.id,
      }));
  }

  return (
    <Content>
      <h1>Dados básicos</h1>

      <div className="imageInformation">
        <ImageUpload
          name="image"
          action="/api/file-upload"
          label="Foto do imóvel:"
          showAsterisk
        />

        <div className="information">
          <Select
            name="walletId"
            label="Carteira:"
            showAsterisk
            value={walletId}
            onChange={(value) => setWalletId(value)}
            options={wallets.data.map((wallet) => ({
              label: wallet.name,
              value: wallet.id,
            }))}
          />

          <Select
            name="propertyOwnerId"
            label="Proprietário:"
            showAsterisk
            readOnly={!walletId ? true : false}
            options={propertyOwnerOptions()}
          />

          <Select
            name="status"
            label="Status:"
            showAsterisk
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
          />

          <Input
            name="reference"
            label="Código externo:"
            placeholder="Escreva aqui..."
            showAsterisk
          />
        </div>
      </div>

      <div className="footerInformation">
        <Input
          name="name"
          label="Nome do imóvel:"
          placeholder="Escreva aqui..."
          showAsterisk
        />
        <Textarea
          name="description"
          label="Descrição:"
          placeholder="Escreva aqui..."
          showAsterisk
          rows={4}
        />
      </div>
    </Content>
  );
}

export { GeneralForm };

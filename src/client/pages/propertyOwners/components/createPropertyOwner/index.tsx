import {
  Button,
  FormProvider,
  Input,
  MaskedInput,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  RadioBox,
  RadioGroup,
  Select,
  Switch,
  useModal,
} from "@arkyn/components";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router";

import { useState } from "react";
import type { PropertyOwnersLoader } from "~/client/types/propertyOwnersLoader";
import { statusBadge } from "../../utilities/statusBadge";
import { ModalContent } from "./styles";

function CreatePropertyOwner() {
  const { modalIsOpen, closeModal } = useModal("create-property-owner");
  const { wallets } = useLoaderData<PropertyOwnersLoader>();

  const actionData = useActionData();
  const navigation = useNavigation();

  const [type, setType] = useState("pj");
  const [status, setStatus] = useState<"active" | "inactive">("inactive");

  const walletOptions = wallets.data.map((wallet) => ({
    label: wallet.name,
    value: wallet.id,
  }));

  return (
    <FormProvider
      form={<Form method="post" />}
      fieldErrors={actionData?.fieldErrors}
    >
      <ModalContainer isVisible={modalIsOpen} makeInvisible={closeModal}>
        <ModalHeader>Adicionar proprietário</ModalHeader>

        <ModalContent>
          <RadioGroup
            showAsterisk
            name="taxIdentifierKind"
            label="Tipo de cadastro:"
            value={type}
            onChange={(value) => setType(value)}
          >
            <RadioBox value="pj">Pessoa jurídica</RadioBox>
            <RadioBox value="pf">Pessoa física</RadioBox>
          </RadioGroup>

          {type === "pj" && (
            <MaskedInput
              name="taxIdentifierValue"
              mask={"__.___.___/____-__"}
              replacement={{ _: /\d/ }}
              label="CNPJ:"
              placeholder="Escreva aqui..."
              showAsterisk
              defaultValue={""}
            />
          )}

          {type === "pf" && (
            <MaskedInput
              name="taxIdentifierValue"
              mask={"___.___.___-__"}
              replacement={{ _: /\d/ }}
              label="CPF:"
              placeholder="Escreva aqui..."
              showAsterisk
              defaultValue={""}
            />
          )}

          <Select
            label="Selecione sua carteira"
            name="walletId"
            showAsterisk
            options={walletOptions}
          />

          <Input
            name="tradeName"
            label="Nome fantasia:"
            placeholder="Escreva aqui..."
            showAsterisk
          />
          <Input
            name="legalName"
            label="Razão social:"
            placeholder="Escreva aqui..."
            showAsterisk
          />

          <Input
            name="reference"
            label="Referencia:"
            placeholder="Escreva aqui..."
            showAsterisk
          />

          <div className="status">
            <Switch
              name="status"
              defaultChecked={status === "inactive" ? false : true}
              value="active"
              unCheckedValue="inactive"
              label="Status:"
              onCheck={(value) => setStatus(value as "active" | "inactive")}
            />

            {statusBadge(status)}
          </div>
        </ModalContent>

        <ModalFooter>
          <Button type="button" variant="outline" onClick={closeModal}>
            Cancelar
          </Button>
          <Button
            name="_action"
            value="createPropertyOwner"
            isLoading={navigation.state !== "idle"}
          >
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContainer>
    </FormProvider>
  );
}

export { CreatePropertyOwner };

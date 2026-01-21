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
import { useEffect, useState } from "react";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router";
import type { PropertyOwnersLoader } from "~/client/types/propertyOwnersLoader";
import { statusBadge } from "../../utilities/statusBadge";
import { ModalContent } from "./styles";

function UpdatePropertyOwner() {
  const { modalIsOpen, modalData, closeModal } = useModal(
    "update-property-owner"
  );
  const { wallets } = useLoaderData<PropertyOwnersLoader>();

  const actionData = useActionData();
  const navigation = useNavigation();

  const [type, setType] = useState("pj");
  const [status, setStatus] = useState<"active" | "inactive">("active");

  useEffect(() => {
    if (modalData?.status) setStatus(modalData.status);
  }, [modalData]);

  const walletOptions = wallets.data.map((wallet) => ({
    label: wallet.name,
    value: wallet.id,
  }));

  const getOnlyNumbers = (value?: string) => value?.replace(/\D/g, "") ?? "";

  const onlyNumbers = getOnlyNumbers(modalData?.taxIdentifierValue);

  return (
    <FormProvider
      form={<Form method="post" />}
      fieldErrors={actionData?.fieldErrors}
    >
      <ModalContainer isVisible={modalIsOpen} makeInvisible={closeModal}>
        <ModalHeader>Atualizar proprietário</ModalHeader>

        <ModalContent>
          <input type="hidden" name="id" value={modalData?.id} />

          <RadioGroup
            showAsterisk
            name="taxIdentifierKind"
            label="Tipo de cadastro:"
            value={type}
            onChange={(value) => setType(value)}
            defaultValue={modalData?.taxIdentifierKind}
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
              defaultValue={
                onlyNumbers.length === 14 ? modalData?.taxIdentifierValue : ""
              }
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
              defaultValue={
                onlyNumbers.length === 11 ? modalData?.taxIdentifierValue : ""
              }
            />
          )}

          <Select
            label="Selecione sua carteira:"
            name="walletId"
            showAsterisk
            options={walletOptions}
            defaultValue={modalData?.walletId}
          />

          <Input
            name="tradeName"
            label="Nome fantasia:"
            placeholder="Escreva aqui..."
            showAsterisk
            defaultValue={modalData?.tradeName}
          />
          <Input
            name="legalName"
            label="Razão social:"
            placeholder="Escreva aqui..."
            showAsterisk
            defaultValue={modalData?.legalName}
          />

          <Input
            name="reference"
            label="Referencia:"
            placeholder="Escreva aqui..."
            showAsterisk
            defaultValue={modalData?.reference}
          />

          <div className="status">
            <Switch
              name="status"
              value="active"
              checked={status === "inactive" ? false : true}
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
            value="updatePropertyOwner"
            isLoading={navigation.state !== "idle"}
          >
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContainer>
    </FormProvider>
  );
}

export { UpdatePropertyOwner };

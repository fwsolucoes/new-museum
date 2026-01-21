import {
  Button,
  FormProvider,
  Input,
  MaskedInput,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  Select,
  useModal,
} from "@arkyn/components";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router";
import type { PropertyLoader } from "~/client/types/propertyLoader";

import { ModalContent } from "./styles";

function CreateHistory() {
  const { modalIsOpen, closeModal } = useModal("create-property-history");
  const { propertyHistoryStatuses } = useLoaderData<PropertyLoader>();

  const actionData = useActionData();
  const navigation = useNavigation();

  return (
    <FormProvider
      form={<Form method="post" />}
      fieldErrors={actionData?.fieldErrors}
    >
      <ModalContainer isVisible={modalIsOpen} makeInvisible={closeModal}>
        <ModalHeader>Adicionar histórico</ModalHeader>

        <ModalContent>
          <Input
            name="name"
            label="Nome:"
            placeholder="Escreva aqui..."
            showAsterisk
          />

          <Input
            name="description"
            label="Descrição:"
            placeholder="Escreva aqui..."
            showAsterisk
          />

          <MaskedInput
            name="occurredAt"
            label="Ocorreu em:"
            mask="__/__/____"
            replacement={{ _: /\d/ }}
            placeholder="__/__/____"
            showAsterisk
          />

          <Select
            name="statusId"
            label="Status:"
            placeholder="Selecione..."
            showAsterisk
            options={propertyHistoryStatuses.map((status) => ({
              value: status.id,
              label: status.name,
            }))}
          />
        </ModalContent>

        <ModalFooter>
          <Button type="button" variant="outline" onClick={closeModal}>
            Cancelar
          </Button>
          <Button
            name="_action"
            value="createPropertyHistory"
            isLoading={navigation.state !== "idle"}
          >
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContainer>
    </FormProvider>
  );
}

export { CreateHistory };

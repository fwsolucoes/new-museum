import {
  Button,
  FileUpload,
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

import { ModalContent } from "./styles";
import type { PropertyLoader } from "~/client/types/propertyLoader";

function UpdateHistory() {
  const { modalIsOpen, closeModal, modalData } = useModal(
    "update-property-history"
  );

  const { propertyHistoryStatuses } = useLoaderData<PropertyLoader>();

  const actionData = useActionData();
  const navigation = useNavigation();

  return (
    <FormProvider
      form={<Form method="post" />}
      fieldErrors={actionData?.fieldErrors}
    >
      <ModalContainer isVisible={modalIsOpen} makeInvisible={closeModal}>
        <ModalHeader>Atualizar histórico</ModalHeader>

        <ModalContent>
          <input type="hidden" name="id" value={modalData?.id} />

          <Input
            name="name"
            label="Nome:"
            placeholder="Escreva aqui..."
            showAsterisk
            defaultValue={modalData?.name}
          />

          <Input
            name="description"
            label="Descrição:"
            placeholder="Escreva aqui..."
            defaultValue={modalData?.description}
            showAsterisk
          />

          <MaskedInput
            name="occurredAt"
            label="Ocorreu em:"
            mask="__/__/____"
            replacement={{ _: /\d/ }}
            placeholder="__/__/____"
            showAsterisk
            defaultValue={modalData?.occurredAt}
          />

          <Select
            name="statusId"
            label="Status:"
            placeholder="Selecione..."
            showAsterisk
            defaultValue={modalData?.statusId}
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
            value="updatePropertyHistory"
            isLoading={navigation.state !== "idle"}
          >
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContainer>
    </FormProvider>
  );
}

export { UpdateHistory };

import {
  Button,
  FileUpload,
  FormProvider,
  Input,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  useModal,
} from "@arkyn/components";
import { Form, useActionData, useNavigation } from "react-router";

import { ModalContent } from "./styles";

function UpdateDocument() {
  const { modalIsOpen, closeModal, modalData } = useModal(
    "update-property-document"
  );

  const actionData = useActionData();
  const navigation = useNavigation();

  return (
    <FormProvider
      form={<Form method="post" />}
      fieldErrors={actionData?.fieldErrors}
    >
      <ModalContainer isVisible={modalIsOpen} makeInvisible={closeModal}>
        <ModalHeader>Atualizar documento</ModalHeader>

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
          />

          <FileUpload
            label="Arquivo:"
            acceptFile=".pdf,.doc,.docx"
            name="file"
            action="/api/file-upload"
            showAsterisk
          />
        </ModalContent>

        <ModalFooter>
          <Button type="button" variant="outline" onClick={closeModal}>
            Cancelar
          </Button>
          <Button
            name="_action"
            value="updatePropertyDocument"
            isLoading={navigation.state !== "idle"}
          >
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContainer>
    </FormProvider>
  );
}

export { UpdateDocument };

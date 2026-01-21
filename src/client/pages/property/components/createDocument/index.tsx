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

function CreateDocument() {
  const { modalIsOpen, closeModal } = useModal("create-property-document");

  const actionData = useActionData();
  const navigation = useNavigation();

  return (
    <FormProvider
      form={<Form method="post" />}
      fieldErrors={actionData?.fieldErrors}
    >
      <ModalContainer isVisible={modalIsOpen} makeInvisible={closeModal}>
        <ModalHeader>Adicionar documento</ModalHeader>

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
            value="createPropertyDocument"
            isLoading={navigation.state !== "idle"}
          >
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContainer>
    </FormProvider>
  );
}

export { CreateDocument };

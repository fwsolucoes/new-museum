import {
  Button,
  FormProvider,
  Input,
  MaskedInput,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  Textarea,
  useModal,
} from "@arkyn/components";
import { Form, useActionData, useNavigation } from "react-router";

import { ModalContent } from "./styles";

function CreateWallet() {
  const { modalIsOpen, closeModal } = useModal("create-wallet");

  const actionData = useActionData();
  const navigation = useNavigation();

  return (
    <FormProvider
      form={<Form method="post" />}
      fieldErrors={actionData?.fieldErrors}
    >
      <ModalContainer isVisible={modalIsOpen} makeInvisible={closeModal}>
        <ModalHeader>Adicionar carteira</ModalHeader>

        <ModalContent>
          <Input
            name="name"
            label="Nome:"
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

          <MaskedInput
            name="since"
            label="Desde (ano):"
            mask="__/__/____"
            placeholder="DD/MM/AAAA"
            replacement={{ _: /\d/ }}
            showAsterisk
          />
        </ModalContent>

        <ModalFooter>
          <Button type="button" variant="outline" onClick={closeModal}>
            Cancelar
          </Button>
          <Button
            name="_action"
            value="createWallet"
            isLoading={navigation.state !== "idle"}
          >
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContainer>
    </FormProvider>
  );
}

export { CreateWallet };

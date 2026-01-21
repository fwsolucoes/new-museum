import {
  Button,
  FormProvider,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  useModal,
} from "@arkyn/components";
import { Trash2 } from "lucide-react";
import { Form, useNavigation } from "react-router";

import { ModalContent } from "./styles";

function DeleteWallet() {
  const { modalIsOpen, modalData, closeModal } = useModal("delete-wallet");

  const navigation = useNavigation();

  return (
    <FormProvider form={<Form method="post" />}>
      <ModalContainer isVisible={modalIsOpen} makeInvisible={closeModal}>
        <ModalHeader>Deletar carteira</ModalHeader>

        <ModalContent>
          <input type="hidden" name="id" value={modalData?.id} />
          <Trash2 />
          <p>Tem certeza que deseja deletar esta carteira?</p>
        </ModalContent>

        <ModalFooter>
          <Button type="button" variant="outline" onClick={closeModal}>
            Cancelar
          </Button>
          <Button
            name="_action"
            value="deleteWallet"
            scheme="danger"
            isLoading={navigation.state !== "idle"}
          >
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContainer>
    </FormProvider>
  );
}

export { DeleteWallet };

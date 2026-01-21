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

function DeleteProperty() {
  const { modalIsOpen, modalData, closeModal } = useModal("delete-property");

  const navigation = useNavigation();

  return (
    <FormProvider form={<Form method="post" />}>
      <ModalContainer isVisible={modalIsOpen} makeInvisible={closeModal}>
        <ModalHeader>Deletar imóvel</ModalHeader>

        <ModalContent>
          <input type="hidden" name="id" value={modalData?.id} />
          <Trash2 />
          <p>Tem certeza que deseja deletar este imóvel?</p>
        </ModalContent>

        <ModalFooter>
          <Button type="button" variant="outline" onClick={closeModal}>
            Cancelar
          </Button>
          <Button
            name="_action"
            value="deleteProperty"
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

export { DeleteProperty };

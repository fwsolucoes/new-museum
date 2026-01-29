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
import { TrashDashedBorderCircle } from "~/client/components/TrashDashedBorderCircle";

function DeleteItemModal() {
  const { modalIsOpen, modalData, closeModal } = useModal("delete-item");

  const navigation = useNavigation();

  return (
    <FormProvider form={<Form method="post" />}>
      <ModalContainer isVisible={modalIsOpen} makeInvisible={closeModal}>
        <ModalHeader>Remover item</ModalHeader>

        <ModalContent>
          <TrashDashedBorderCircle />
          <div className="textContent">
            <strong>Deseja remover esse item?</strong>
            <p>
              O item <b>{modalData?.name}</b> será permanentemente removido.
            </p>
          </div>
        </ModalContent>

        <ModalFooter>
          <input type="hidden" name="id" value={modalData?.id} />
          <Button type="button" variant="outline" onClick={closeModal}>
            Cancelar
          </Button>
          <Button
            name="_action"
            value="deleteItem"
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

export { DeleteItemModal };

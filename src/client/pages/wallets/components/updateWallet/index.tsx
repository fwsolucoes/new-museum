import {
  Button,
  FormProvider,
  Input,
  MaskedInput,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  Switch,
  Textarea,
  useModal,
} from "@arkyn/components";
import { Form, useActionData, useNavigation } from "react-router";
import { ModalContent, WalletSwitchContainer } from "./styles";
import { statusBadge } from "../../utilities/statusBadge";

function UpdateWallet() {
  const { modalIsOpen, modalData, openModal, closeModal } =
    useModal("update-wallet");

  const status = modalData?.status;
  const changeStatus = (status: string) => openModal({ ...modalData, status });

  const actionData = useActionData();
  const navigation = useNavigation();

  return (
    <FormProvider
      form={<Form method="post" />}
      fieldErrors={actionData?.fieldErrors}
    >
      <ModalContainer isVisible={modalIsOpen} makeInvisible={closeModal}>
        <ModalHeader>Atualizar carteira</ModalHeader>

        <ModalContent>
          <input type="hidden" name="id" value={modalData?.id} />

          <Input
            name="name"
            label="Nome:"
            placeholder="Escreva aqui..."
            showAsterisk
            defaultValue={modalData?.name}
          />

          <Textarea
            name="description"
            label="Descrição:"
            placeholder="Escreva aqui..."
            showAsterisk
            rows={4}
            defaultValue={modalData?.description}
          />

          <MaskedInput
            name="since"
            label="Desde (ano):"
            mask="__/__/____"
            placeholder="DD/MM/AAAA"
            replacement={{ _: /\d/ }}
            showAsterisk
            defaultValue={modalData?.since}
          />

          <WalletSwitchContainer>
            <Switch
              name="status"
              defaultChecked={modalData?.status === "active"}
              value="active"
              unCheckedValue="inactive"
              label="Status:"
              onCheck={changeStatus}
            />

            {statusBadge(status)}
          </WalletSwitchContainer>
        </ModalContent>

        <ModalFooter>
          <Button type="button" variant="outline" onClick={closeModal}>
            Cancelar
          </Button>
          <Button
            name="_action"
            value="updateWallet"
            isLoading={navigation.state !== "idle"}
          >
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContainer>
    </FormProvider>
  );
}

export { UpdateWallet };

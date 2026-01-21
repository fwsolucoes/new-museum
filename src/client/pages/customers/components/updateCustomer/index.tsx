import {
  Button,
  FormProvider,
  Input,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  Select,
  Switch,
  useModal,
} from "@arkyn/components";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router";

import type { CustomersLoader } from "~/client/types/customersLoader";
import { statusBadge } from "../../utilities/statusBadge";
import { ModalContent, CustomerSwitchContainer } from "./styles";

function UpdateCustomer() {
  const { modalIsOpen, modalData, closeModal, openModal } =
    useModal("update-customer");

  const status = modalData?.status;
  const changeStatus = (status: string) => openModal({ ...modalData, status });

  const { wallets } = useLoaderData<CustomersLoader>();

  const actionData = useActionData();
  const navigation = useNavigation();

  return (
    <FormProvider
      form={<Form method="post" />}
      fieldErrors={actionData?.fieldErrors}
    >
      <ModalContainer isVisible={modalIsOpen} makeInvisible={closeModal}>
        <ModalHeader>Atualizar Usuário</ModalHeader>

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
            name="email"
            label="E-mail:"
            placeholder="Escreva aqui..."
            showAsterisk
            defaultValue={modalData?.email}
          />

          <Input
            name="password"
            label="Senha:"
            type="password"
            placeholder="Escreva aqui..."
          />

          <Input
            name="confirmPassword"
            label="Confirmar senha:"
            type="password"
            placeholder="Escreva aqui..."
          />

          <Select
            name="walletId"
            label="Carteira de imóveis:"
            placeholder="Selecione..."
            showAsterisk
            defaultValue={modalData?.walletId}
            options={wallets.data.map((wallet) => ({
              label: wallet.name,
              value: wallet.id,
            }))}
          />

          <CustomerSwitchContainer>
            <Switch
              name="status"
              defaultChecked={modalData?.status === "active"}
              value="active"
              unCheckedValue="inactive"
              label="Status:"
              onCheck={changeStatus}
            />

            {statusBadge(status)}
          </CustomerSwitchContainer>
        </ModalContent>

        <ModalFooter>
          <Button type="button" variant="outline" onClick={closeModal}>
            Cancelar
          </Button>
          <Button
            name="_action"
            value="updateCustomer"
            isLoading={navigation.state !== "idle"}
          >
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContainer>
    </FormProvider>
  );
}

export { UpdateCustomer };

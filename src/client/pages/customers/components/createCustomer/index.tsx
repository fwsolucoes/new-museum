import {
  Button,
  FormProvider,
  Input,
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

import type { CustomersLoader } from "~/client/types/customersLoader";
import { ModalContent } from "./styles";

function CreateCustomer() {
  const { modalIsOpen, closeModal } = useModal("create-customer");
  const { wallets } = useLoaderData<CustomersLoader>();

  const actionData = useActionData();
  const navigation = useNavigation();

  return (
    <FormProvider
      form={<Form method="post" />}
      fieldErrors={actionData?.fieldErrors}
    >
      <ModalContainer isVisible={modalIsOpen} makeInvisible={closeModal}>
        <ModalHeader>Adicionar usuário</ModalHeader>

        <ModalContent>
          <Input
            name="name"
            label="Nome:"
            placeholder="Escreva aqui..."
            showAsterisk
          />

          <Input
            name="email"
            label="E-mail:"
            placeholder="Escreva aqui..."
            showAsterisk
          />

          <Input
            name="password"
            label="Senha:"
            type="password"
            placeholder="Escreva aqui..."
            showAsterisk
          />

          <Input
            name="confirmPassword"
            label="Confirmar senha:"
            type="password"
            placeholder="Escreva aqui..."
            showAsterisk
          />

          <Select
            name="walletId"
            label="Carteira de imóveis:"
            placeholder="Selecione..."
            showAsterisk
            options={wallets.data.map((wallet) => ({
              label: wallet.name,
              value: wallet.id,
            }))}
          />
        </ModalContent>

        <ModalFooter>
          <Button type="button" variant="outline" onClick={closeModal}>
            Cancelar
          </Button>
          <Button
            name="_action"
            value="createCustomer"
            isLoading={navigation.state !== "idle"}
          >
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContainer>
    </FormProvider>
  );
}

export { CreateCustomer };

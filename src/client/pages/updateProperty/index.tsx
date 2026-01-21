import { Button, FormProvider, useAutomation } from "@arkyn/components";
import { useActionData, useNavigation } from "react-router";

import { AddressForm } from "./components/addressForm";
import { GeneralForm } from "./components/generalForm";
import { Header } from "./components/header";
import { Container, Form } from "./styles";

function UpdatePropertyPage() {
  const actionData = useActionData();
  const navigation = useNavigation();
  useAutomation(actionData);

  return (
    <Container>
      <Header />

      <FormProvider
        form={<Form method="post" />}
        fieldErrors={actionData?.fieldErrors}
      >
        <GeneralForm />
        <AddressForm />

        <Button
          name="_action"
          value="updateProperty"
          isLoading={navigation.state !== "idle"}
        >
          Confirmar
        </Button>
      </FormProvider>
    </Container>
  );
}

export { UpdatePropertyPage };

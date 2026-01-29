import { Button, FormProvider, useAutomation } from "@arkyn/components";
import { useActionData, useNavigation } from "react-router";

import { CardForm } from "./components/cardForm";
import { Header } from "./components/header";
import { Container, Form } from "./styles";
import { Check } from "lucide-react";

function UpdateItemPage() {
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
        <CardForm />
        <Button
          name="_action"
          value="updateItem"
          leftIcon={Check}
          isLoading={navigation.state !== "idle"}
        >
          Salvar
        </Button>
      </FormProvider>
    </Container>
  );
}

export { UpdateItemPage };

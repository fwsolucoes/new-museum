import { FormProvider, useAutomation } from "@arkyn/components";
import { useActionData } from "react-router";

import { CardForm } from "./components/cardForm";
import { Header } from "./components/header";
import { Container, Form } from "./styles";

function CreateItemPage() {
  const actionData = useActionData();
  useAutomation(actionData);

  return (
    <Container>
      <Header />
      <FormProvider
        form={<Form method="post" />}
        fieldErrors={actionData?.fieldErrors}
      >
        <CardForm />
      </FormProvider>
    </Container>
  );
}

export { CreateItemPage };

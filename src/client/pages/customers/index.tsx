import { useAutomation } from "@arkyn/components";
import { useActionData } from "react-router";

import { CreateCustomer } from "./components/createCustomer";
import { DeleteCustomer } from "./components/deleteCustomer";
import { UpdateCustomer } from "./components/updateCustomer";
import { Header } from "./components/header";
import { Table } from "./components/table";
import { Container } from "./styles";

function CustomersPage() {
  const actionData = useActionData();
  useAutomation(actionData);

  return (
    <Container>
      <Header />
      <Table />
      <CreateCustomer />
      <DeleteCustomer />
      <UpdateCustomer />
    </Container>
  );
}

export { CustomersPage };

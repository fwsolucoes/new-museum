import { useAutomation } from "@arkyn/components";
import { useActionData } from "react-router";

import { DeleteProperty } from "./components/deleteProperty";
import { Header } from "./components/header";
import { Table } from "./components/table";
import { Container } from "./styles";

function PropertiesPage() {
  const actionData = useActionData();
  useAutomation(actionData);

  return (
    <Container>
      <Header />
      <Table />
      <DeleteProperty />
    </Container>
  );
}

export { PropertiesPage };

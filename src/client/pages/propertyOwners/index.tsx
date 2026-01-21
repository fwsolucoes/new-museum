import { useAutomation } from "@arkyn/components";
import { useActionData } from "react-router";

import { CreatePropertyOwner } from "./components/createPropertyOwner";
import { DeletePropertyOwner } from "./components/deletePropertyOwner";
import { UpdatePropertyOwner } from "./components/updatePropertyOwner";
import { Header } from "./components/header";
import { Table } from "./components/table";
import { Container } from "./styles";

function PropertyOwnersPage() {
  const actionData = useActionData();
  useAutomation(actionData);

  return (
    <Container>
      <Header />
      <Table />
      <CreatePropertyOwner />
      <DeletePropertyOwner />
      <UpdatePropertyOwner />
    </Container>
  );
}

export { PropertyOwnersPage };

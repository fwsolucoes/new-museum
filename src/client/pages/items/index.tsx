import { useAutomation } from "@arkyn/components";
import { useActionData } from "react-router";

import { DeleteItemModal } from "./components/deleteItemModal";
import { Header } from "./components/header";
import { Table } from "./components/table";
import { Container } from "./styles";

function ItemsPage() {
  const actionData = useActionData();
  useAutomation(actionData);

  return (
    <Container>
      <Header />
      <Table />
      <DeleteItemModal />
    </Container>
  );
}

export { ItemsPage };

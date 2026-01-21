import { useAutomation } from "@arkyn/components";
import { useActionData } from "react-router";

import { CreateWallet } from "./components/createWallet";
import { DeleteWallet } from "./components/deleteWallet";
import { UpdateWallet } from "./components/updateWallet";
import { Header } from "./components/header";
import { Table } from "./components/table";
import { Container } from "./styles";

function WalletsPage() {
  const actionData = useActionData();
  useAutomation(actionData);

  return (
    <Container>
      <Header />
      <Table />
      <CreateWallet />
      <DeleteWallet />
      <UpdateWallet />
    </Container>
  );
}

export { WalletsPage };

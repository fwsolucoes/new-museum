import { useAutomation } from "@arkyn/components";
import { useActionData } from "react-router";

import { Contract } from "./components/contract";
import { CreateDocument } from "./components/createDocument";
import { CreateHistory } from "./components/createHistory";
import { DeleteDocument } from "./components/deleteDocument";
import { DocumentList } from "./components/documentList";
import { FinancialSummary } from "./components/financialSummary";
import { Guarantee } from "./components/guarantee";
import { Header } from "./components/header";
import { HistoryList } from "./components/historyList";
import { Information } from "./components/information";
import { MetricsChart } from "./components/metricsChart";
import { Readjustment } from "./components/readjustment";
import { UpdateDocument } from "./components/updateDocument";

import { DeleteHistory } from "./components/deleteHistory";
import { UpdateHistory } from "./components/updateHistory";
import { Container, GridContainer, ManagementGrid } from "./styles";

function PropertyPage() {
  const actionData = useActionData();
  useAutomation(actionData);

  return (
    <>
      <Container>
        <Header />
        <Information />
        <GridContainer>
          <Contract />
          <Readjustment />
          <Guarantee />
        </GridContainer>
        <GridContainer>
          <MetricsChart />
          <FinancialSummary />
        </GridContainer>
        <ManagementGrid>
          <DocumentList />
          <HistoryList />
        </ManagementGrid>
      </Container>

      <CreateDocument />
      <DeleteDocument />
      <UpdateDocument />
      <CreateHistory />
      <DeleteHistory />
      <UpdateHistory />
    </>
  );
}

export { PropertyPage };

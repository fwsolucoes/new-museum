import { FinancialSummary } from "./components/financialSummary";
import { Header } from "./components/header";
import { MetricsChart } from "./components/metricsChart";
import { PropertiesMap } from "./components/propertiesMap";
import { SummaryCard } from "./components/summaryCard";
import { Container, MetricsGrid, SummaryGrid } from "./styles";

function DashboardPage() {
  return (
    <Container>
      <Header />
      <SummaryGrid>
        <SummaryCard type="total" />
        <SummaryCard type="rented" />
        <SummaryCard type="vacant" />
        <SummaryCard type="undergoingRegularization" />
        <SummaryCard type="legal" />
        <SummaryCard type="defaulters" />
      </SummaryGrid>
      <MetricsGrid>
        <MetricsChart />
        <FinancialSummary />
      </MetricsGrid>
      <PropertiesMap />
    </Container>
  );
}

export { DashboardPage };

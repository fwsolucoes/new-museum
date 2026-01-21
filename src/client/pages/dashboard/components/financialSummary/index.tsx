import { Select } from "@arkyn/components";
import { ArrowDown, ArrowUp, Wallet } from "lucide-react";
import { Container, Header, SummaryCard } from "./styles";

function FinancialSummary() {
  return (
    <Container>
      <Header>
        <strong>Resumo financeiro</strong>
        <Select
          name="time"
          options={[
            { label: "Semanal", value: "weekly" },
            { label: "Mensal", value: "monthly" },
            { label: "Anual", value: "yearly" },
          ]}
        />
      </Header>

      <SummaryCard className="success">
        <span className="image">
          <ArrowUp />
        </span>
        <div>
          <span>Total arrecadado</span>
          <strong>R$ 186.450,00</strong>
        </div>
      </SummaryCard>

      <SummaryCard className="danger">
        <span className="image">
          <ArrowDown />
        </span>
        <div>
          <span>Total despesas</span>
          <strong>R$ 42.380,00</strong>
        </div>
      </SummaryCard>

      <SummaryCard className="info">
        <span className="image">
          <Wallet />
        </span>
        <div>
          <span>Total liquido</span>
          <strong>R$ 144.070,00</strong>
        </div>
      </SummaryCard>
    </Container>
  );
}

export { FinancialSummary };

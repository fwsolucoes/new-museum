import {
  AlertTriangle,
  Home,
  KeyRound,
  Scale,
  Warehouse,
  XCircle,
} from "lucide-react";
import { Container } from "./styles";
import { useLoaderData } from "react-router";
import type { DashboardLoader } from "~/client/types/dashboardLoader";

type SummaryCardProps = {
  type:
    | "total"
    | "rented"
    | "vacant"
    | "undergoingRegularization"
    | "legal"
    | "defaulters";
};

function SummaryCard({ type }: SummaryCardProps) {
  const { propertyMetrics } = useLoaderData<DashboardLoader>();

  const data = {
    total: { icon: <Warehouse />, label: "Total de imóveis" },
    rented: { icon: <Home />, label: "Imóveis locados" },
    vacant: { icon: <KeyRound />, label: "Imóveis vagos" },
    undergoingRegularization: {
      icon: <AlertTriangle />,
      label: "Em regularização",
    },
    legal: { icon: <Scale />, label: "Jurídico" },
    defaulters: { icon: <XCircle />, label: "Inadimplentes" },
  };

  return (
    <Container className={type}>
      <div className="iconContainer">{data[type].icon}</div>
      <strong>{propertyMetrics[type]}</strong>
      <p>{data[type].label}</p>
    </Container>
  );
}

export { SummaryCard };

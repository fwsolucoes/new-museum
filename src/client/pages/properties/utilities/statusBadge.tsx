import { Badge } from "@arkyn/components";

type StatusType =
  | "rentedNormal"
  | "rentedLegal"
  | "rentedVacant"
  | "rentedClaim"
  | "available"
  | "underRegularization"
  | "sold";

function statusBadge(status: StatusType) {
  switch (status) {
    case "rentedNormal":
      return <Badge scheme="info">Contrato ativo - normal</Badge>;
    case "rentedLegal":
      return <Badge scheme="info">Contrato ativo - jurídico</Badge>;
    case "rentedVacant":
      return <Badge scheme="info">Contrato ativo - desocupação</Badge>;
    case "rentedClaim":
      return <Badge scheme="info">Contrato ativo - sinistro</Badge>;
    case "available":
      return <Badge scheme="success">Disponível</Badge>;
    case "sold":
      return <Badge scheme="danger">Vendido</Badge>;
    case "underRegularization":
      return <Badge scheme="warning">Em Regularização</Badge>;
  }
}

export { statusBadge };

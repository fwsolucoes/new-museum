import { Badge } from "@arkyn/components";

type StatusType = "active" | "inactive";

function statusBadge(status: StatusType) {
  if (status === "active") return <Badge scheme="success">Ativo</Badge>;
  return <Badge scheme="danger">Inativo</Badge>;
}

export { statusBadge };

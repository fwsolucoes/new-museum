import { Badge } from "@arkyn/components";

type StatusType = "active" | "inactive";

function statusBadge(status: StatusType) {
  if (status === "inactive") return <Badge scheme="danger">Inativo</Badge>;
  return <Badge scheme="success">Ativo</Badge>;
}

export { statusBadge };

import { Badge } from "@arkyn/components";

function statusBadge(status: string) {
  if (status === "active") return <Badge scheme="success">Ativo</Badge>;
  return <Badge scheme="danger">Inativo</Badge>;
}

export { statusBadge };

import { loader as adminLoader } from "~/main/routes/route.admin.dashboard";
import { loader as customerLoader } from "~/main/routes/route.customer.dashboard";

type DashboardLoader =
  | Awaited<ReturnType<typeof adminLoader>>
  | Awaited<ReturnType<typeof customerLoader>>;

export type { DashboardLoader };

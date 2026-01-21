import { loader as adminLoader } from "~/main/routes/route.admin.dashboard";

type DashboardLoader = Awaited<ReturnType<typeof adminLoader>>;

export type { DashboardLoader };

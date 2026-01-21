import { loader } from "~/main/routes/route.admin.property";

type PropertyLoader = Awaited<ReturnType<typeof loader>>;

export type { PropertyLoader };

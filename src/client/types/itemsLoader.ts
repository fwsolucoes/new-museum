import { loader } from "~/main/routes/route.panel.items";

type ItemsLoader = Awaited<ReturnType<typeof loader>>;

export type { ItemsLoader };

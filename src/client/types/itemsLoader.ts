import { loader } from "~/main/routes/route.items";

type ItemsLoader = Awaited<ReturnType<typeof loader>>;

export type { ItemsLoader };

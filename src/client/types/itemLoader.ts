import { loader } from "~/main/routes/route.updateItem";

type ItemLoader = Awaited<ReturnType<typeof loader>>;

export type { ItemLoader };

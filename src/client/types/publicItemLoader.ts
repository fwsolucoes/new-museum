import { loader } from "~/main/routes/route.item.$id";

type ItemLoader = Awaited<ReturnType<typeof loader>>;

export type { ItemLoader };

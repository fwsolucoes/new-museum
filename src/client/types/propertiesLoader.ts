import { loader } from "~/main/routes/route.admin.properties";

type PropertiesLoader = Awaited<ReturnType<typeof loader>>;

export type { PropertiesLoader };

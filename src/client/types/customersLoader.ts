import { loader } from "~/main/routes/route.admin.customers";

type CustomersLoader = Awaited<ReturnType<typeof loader>>;

export type { CustomersLoader };

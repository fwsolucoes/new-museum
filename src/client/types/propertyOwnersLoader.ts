import { loader } from "~/main/routes/route.admin.propertyOwners";

type PropertyOwnersLoader = Awaited<ReturnType<typeof loader>>;

export type { PropertyOwnersLoader };

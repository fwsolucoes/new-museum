import { loader } from "~/main/routes/route.admin.createProperty";

type CreatePropertyLoader = Awaited<ReturnType<typeof loader>>;

export type { CreatePropertyLoader };

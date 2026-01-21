import { loader } from "~/main/routes/route.admin.updateProperty";

type UpdatePropertyLoader = Awaited<ReturnType<typeof loader>>;

export type { UpdatePropertyLoader };

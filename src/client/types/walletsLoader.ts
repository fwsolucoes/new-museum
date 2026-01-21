import { loader } from "~/main/routes/route.admin.wallets";

type WalletsLoader = Awaited<ReturnType<typeof loader>>;

export type { WalletsLoader };

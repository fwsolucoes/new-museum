import type { Route } from "+/route.admin.wallets";
import { ErrorBoundaryPage } from "~/client/pages/errorBoundary";
import { WalletsPage } from "~/client/pages/wallets";
import { DecodeActionAdapter } from "~/infra/adapters/decodeAction";
import { ErrorHandlerAdapter } from "~/infra/adapters/errorHandlerAdapter";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { createWallet } from "../factories/wallet/createWalletFactory";
import { deleteWallet } from "../factories/wallet/deleteWalletFactory";
import { listWallets } from "../factories/wallet/listWalletsFactory";
import { updateWallet } from "../factories/wallet/updateWalletFactory";

export function meta(props: Route.MetaArgs) {
  return [{ title: `M2G2 | Carteiras` }];
}

export async function loader(args: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);
  const wallets = await listWallets.handle(adaptedRoute);
  return { wallets };
}

export async function action(args: Route.ActionArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);
  const _action = await DecodeActionAdapter.decode(adaptedRoute.request);

  try {
    switch (_action) {
      case "createWallet":
        return await createWallet.handle(adaptedRoute);
      case "updateWallet":
        return await updateWallet.handle(adaptedRoute);
      case "deleteWallet":
        return await deleteWallet.handle(adaptedRoute);
      default:
        throw HttpAdapter.notImplemented("Action not implemented");
    }
  } catch (error) {
    return ErrorHandlerAdapter.handle(error);
  }
}

export function ErrorBoundary() {
  return <ErrorBoundaryPage />;
}

export default function WalletsRoute() {
  return <WalletsPage />;
}

import type { Route } from "+/route.admin.updateProperty";
import { UpdatePropertyPage } from "~/client/pages/updateProperty";
import { DecodeActionAdapter } from "~/infra/adapters/decodeAction";
import { ErrorHandlerAdapter } from "~/infra/adapters/errorHandlerAdapter";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { listProperty } from "../factories/property/listPropertyFactory";
import { updateProperty } from "../factories/property/updatePropertyFactory";
import { listWallets } from "../factories/wallet/listWalletsFactory";
import { listPropertyOwners } from "../factories/propertyOwner/listPropertyOwnersFactory";
import { ErrorBoundaryPage } from "~/client/pages/errorBoundary";

export async function loader(args: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);

  const [property, wallets, propertyOwners] = await Promise.all([
    listProperty.handle(adaptedRoute),
    listWallets.handle(adaptedRoute),
    listPropertyOwners.handle(adaptedRoute),
  ]);

  return { property, wallets, propertyOwners };
}

export async function action(args: Route.ActionArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);
  const _action = await DecodeActionAdapter.decode(adaptedRoute.request);

  try {
    switch (_action) {
      case "updateProperty":
        return await updateProperty.handle(adaptedRoute);
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

export default function UpdatePropertyRoute() {
  return <UpdatePropertyPage />;
}

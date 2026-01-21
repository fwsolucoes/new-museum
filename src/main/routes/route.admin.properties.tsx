import type { Route } from "+/route.admin.properties";
import { ErrorBoundaryPage } from "~/client/pages/errorBoundary";
import { PropertiesPage } from "~/client/pages/properties";
import { DecodeActionAdapter } from "~/infra/adapters/decodeAction";
import { ErrorHandlerAdapter } from "~/infra/adapters/errorHandlerAdapter";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { deleteProperty } from "../factories/property/deletePropertyFactory";
import { listProperties } from "../factories/property/listPropertiesFactory";
import { listPropertyOwners } from "../factories/propertyOwner/listPropertyOwnersFactory";
import { listWallets } from "../factories/wallet/listWalletsFactory";

export function meta(props: Route.MetaArgs) {
  return [{ title: "M2G2 | Propriedades" }];
}

export async function loader(args: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);

  const [properties, wallets, propertyOwners] = await Promise.all([
    listProperties.handle(adaptedRoute),
    listWallets.handle(adaptedRoute),
    listPropertyOwners.handle(adaptedRoute),
  ]);

  return { properties, wallets, propertyOwners };
}

export async function action(args: Route.ActionArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);
  const _action = await DecodeActionAdapter.decode(adaptedRoute.request);

  try {
    switch (_action) {
      case "deleteProperty":
        return await deleteProperty.handle(adaptedRoute);
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

export default function PropertiesRoute() {
  return <PropertiesPage />;
}

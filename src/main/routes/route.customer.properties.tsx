import type { Route } from "+/route.admin.properties";
import { ErrorBoundaryPage } from "~/client/pages/errorBoundary";
import { PropertiesPage } from "~/client/pages/properties";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { listProperties } from "../factories/property/listPropertiesFactory";
import { listPropertyOwners } from "../factories/propertyOwner/listPropertyOwnersFactory";
import { listWallets } from "../factories/wallet/listWalletsFactory";

export async function loader(args: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);

  const [properties, wallets, propertyOwners] = await Promise.all([
    listProperties.handle(adaptedRoute),
    listWallets.handle(adaptedRoute),
    listPropertyOwners.handle(adaptedRoute),
  ]);

  return { properties, wallets, propertyOwners };
}

export function ErrorBoundary() {
  return <ErrorBoundaryPage />;
}

export default function PropertiesRoute() {
  return <PropertiesPage />;
}

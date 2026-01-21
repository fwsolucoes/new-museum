import type { Route } from "+/route.admin.dashboard";
import { DashboardPage } from "~/client/pages/dashboard";
import { ErrorBoundaryPage } from "~/client/pages/errorBoundary";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { listPropertyMapView } from "../factories/property/listPropertyMapViewFactory";
import { listPropertyMetrics } from "../factories/property/listPropertyMetricsFactory";
import { listWallets } from "../factories/wallet/listWalletsFactory";

export function meta(props: Route.MetaArgs) {
  return [{ title: "M2G2 | Dashboard" }];
}

export async function loader(args: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);

  const [propertyMetrics, propertyMapView, wallets] = await Promise.all([
    listPropertyMetrics.handle(adaptedRoute),
    listPropertyMapView.handle(adaptedRoute),
    listWallets.handle(adaptedRoute),
  ]);

  return { propertyMetrics, propertyMapView, wallets };
}

export function ErrorBoundary() {
  return <ErrorBoundaryPage />;
}

export default function DashboardRoute() {
  return <DashboardPage />;
}

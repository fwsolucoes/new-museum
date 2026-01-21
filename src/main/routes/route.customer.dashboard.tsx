import type { Route } from "+/route.admin.dashboard";
import { DashboardPage } from "~/client/pages/dashboard";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { listPropertyMapView } from "../factories/property/listPropertyMapViewFactory";
import { listPropertyMetrics } from "../factories/property/listPropertyMetricsFactory";
import { ErrorBoundaryPage } from "~/client/pages/errorBoundary";

export function meta(props: Route.MetaArgs) {
  return [{ title: "M2G2 | Dashboard" }];
}

export async function loader(args: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);

  const [propertyMetrics, propertyMapView] = await Promise.all([
    listPropertyMetrics.handle(adaptedRoute),
    listPropertyMapView.handle(adaptedRoute),
  ]);

  return { propertyMetrics, propertyMapView, wallets: null };
}

export function ErrorBoundary() {
  return <ErrorBoundaryPage />;
}

export default function DashboardRoute() {
  return <DashboardPage />;
}

import type { Route } from "+/layout.panelLayout";
import { PanelLayout } from "~/client/layouts/panelLayout";
import { ErrorBoundaryPage } from "~/client/pages/errorBoundary";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { AuthMiddleware } from "../middlewares/authMiddleware";

export async function loader(args: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);
  const user = await AuthMiddleware.authenticate(adaptedRoute);
  return user;
}

export function ErrorBoundary() {
  return <ErrorBoundaryPage />;
}

export default PanelLayout;

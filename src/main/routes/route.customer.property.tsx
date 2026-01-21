import type { Route } from "+/route.admin.property";
import { PropertyPage } from "~/client/pages/property";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { listProperty } from "../factories/property/listPropertyFactory";
import { listPropertyDocuments } from "../factories/propertyDocument/listPropertyDocumentsFactory";
import { listPropertyHistories } from "../factories/propertyHistory/listPropertyHistoriesFactory";
import { listPropertyHistoryStatuses } from "../factories/propertyHistory/listPropertyHistoryStatusesFactory";
import { ErrorBoundaryPage } from "~/client/pages/errorBoundary";

export function meta(props: Route.MetaArgs) {
  return [{ title: `M2G2 | Propriedade ${props.loaderData?.property.name}` }];
}

export async function loader(args: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);

  const [
    property,
    propertyDocuments,
    propertyHistories,
    propertyHistoryStatuses,
  ] = await Promise.all([
    listProperty.handle(adaptedRoute),
    listPropertyDocuments.handle(adaptedRoute),
    listPropertyHistories.handle(adaptedRoute),
    listPropertyHistoryStatuses.handle(adaptedRoute),
  ]);

  return {
    property,
    propertyDocuments,
    propertyHistories,
    propertyHistoryStatuses,
  };
}

export function ErrorBoundary() {
  return <ErrorBoundaryPage />;
}

export default function PropertyRoute() {
  return <PropertyPage />;
}

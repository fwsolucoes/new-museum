import type { Route } from "+/route.panel.items";
import { ErrorBoundaryPage } from "~/client/pages/errorBoundary";
import { ItemsPage } from "~/client/pages/items";

import { RouteAdapter } from "~/infra/adapters/routeAdapter";

import { listItems } from "../factories/Item/listItemsFactory";

export function meta(props: Route.MetaArgs) {
  return [{ title: "Museu | Items" }];
}

export async function loader(args: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);

  const items = await listItems.handle(adaptedRoute);

  return { items };
}

export function ErrorBoundary() {
  return <ErrorBoundaryPage />;
}

export default function ItemsRoute() {
  return <ItemsPage />;
}

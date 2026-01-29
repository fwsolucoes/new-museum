import type { Route } from "+/route.items";
import { ErrorBoundaryPage } from "~/client/pages/errorBoundary";
import { ItemsPage } from "~/client/pages/items";

import { RouteAdapter } from "~/infra/adapters/routeAdapter";

import { findAllByAccountId } from "../factories/Item/findAllByAccountIdFactory";
import { DecodeActionAdapter } from "~/infra/adapters/decodeAction";
import { deleteItem } from "../factories/Item/deleteFactory";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";
import { ErrorHandlerAdapter } from "~/infra/adapters/errorHandlerAdapter";

export function meta(props: Route.MetaArgs) {
  return [{ title: "Museu | Items" }];
}

export async function loader(args: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);

  const items = await findAllByAccountId.handle(adaptedRoute);

  return { items };
}

export async function action(args: Route.ActionArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);
  const _action = await DecodeActionAdapter.decode(adaptedRoute.request);

  try {
    switch (_action) {
      case "deleteItem":
        return await deleteItem.handle(adaptedRoute);
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

export default function ItemsRoute() {
  return <ItemsPage />;
}

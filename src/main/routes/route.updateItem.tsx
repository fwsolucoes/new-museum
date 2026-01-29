import type { Route } from "+/route.updateItem";
import { UpdateItemPage } from "~/client/pages/updateItem";
import { DecodeActionAdapter } from "~/infra/adapters/decodeAction";
import { ErrorHandlerAdapter } from "~/infra/adapters/errorHandlerAdapter";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { createItem } from "../factories/Item/createItemFactory";
import { ErrorBoundaryPage } from "~/client/pages/errorBoundary";
import { findById } from "../factories/Item/findByIdFactory";

export function meta(props: Route.MetaArgs) {
  return [{ title: "Museu | Editar Item" }];
}

export async function loader(args: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);

  const item = await findById.handle(adaptedRoute);

  return { item };
}

export async function action(args: Route.ActionArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);
  const _action = await DecodeActionAdapter.decode(adaptedRoute.request);

  try {
    switch (_action) {
      case "createItem":
        return await createItem.handle(adaptedRoute);
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

export default function ItemUpdateRoute() {
  return <UpdateItemPage />;
}

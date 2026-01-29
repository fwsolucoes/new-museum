import type { Route } from "+/route.createItem";
import { CreateItemPage } from "~/client/pages/createItem";
import { DecodeActionAdapter } from "~/infra/adapters/decodeAction";
import { ErrorHandlerAdapter } from "~/infra/adapters/errorHandlerAdapter";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { createItem } from "../factories/Item/createFactory";

export function meta(props: Route.MetaArgs) {
  return [{ title: "Museu | Novo Item" }];
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

export default function ItemNewRoute() {
  return <CreateItemPage />;
}

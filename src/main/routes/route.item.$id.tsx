import type { Route } from "+/route.forgotPassword";
import { PublicItemPage } from "~/client/pages/publicItem";
import { ErrorHandlerAdapter } from "~/infra/adapters/errorHandlerAdapter";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { findById } from "../factories/Item/findByIdFactory";

export function meta(props: Route.MetaArgs) {
  return [{ title: `Museu | Item` }];
}

export async function loader(args: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);

  const item = await findById.handle(adaptedRoute);

  return { item };
}

export async function action(props: Route.ActionArgs) {
  try {
    return HttpAdapter.notImplemented("Forgot password not implemented");
  } catch (error) {
    return ErrorHandlerAdapter.handle(error);
  }
}

export default function PublicItemRoute() {
  return <PublicItemPage />;
}

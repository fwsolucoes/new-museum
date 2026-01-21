import type { Route } from "+/route.forgotPassword";
import { PublicItemPage } from "~/client/pages/publicItem";
import { ErrorHandlerAdapter } from "~/infra/adapters/errorHandlerAdapter";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";

export function meta(props: Route.MetaArgs) {
  return [{ title: `Museu | Item` }];
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

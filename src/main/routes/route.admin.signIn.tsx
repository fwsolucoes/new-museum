import { ErrorBoundaryPage } from "~/client/pages/errorBoundary";
import { SignInPage } from "~/client/pages/signIn";
import { ErrorHandlerAdapter } from "~/infra/adapters/errorHandlerAdapter";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { signUser } from "../factories/user/signUserFactory";
import type { Route } from "+/route.admin.signIn";

export function meta(props: Route.MetaArgs) {
  return [{ title: `M2G2 | Area do usuário` }];
}

export async function action(props: Route.ActionArgs) {
  try {
    const adaptedRoute = await RouteAdapter.adaptRoute(props);
    return await signUser.handle(adaptedRoute);
  } catch (error) {
    return ErrorHandlerAdapter.handle(error);
  }
}

export function ErrorBoundary() {
  return <ErrorBoundaryPage />;
}

export default function SignInRoute() {
  return <SignInPage />;
}

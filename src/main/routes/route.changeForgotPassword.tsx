import type { Route } from "+/route.changeForgotPassword";
import { ChangeForgotPasswordPage } from "~/client/pages/changeForgotPassword";
import { ErrorBoundaryPage } from "~/client/pages/errorBoundary";
import { ErrorHandlerAdapter } from "~/infra/adapters/errorHandlerAdapter";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";

export function meta(props: Route.MetaArgs) {
  return [{ title: `M2G2 | Alterar senha` }];
}

export async function action(props: Route.ActionArgs) {
  try {
    return HttpAdapter.notImplemented("Change forgot password not implemented");
  } catch (error) {
    return ErrorHandlerAdapter.handle(error);
  }
}

export function ErrorBoundary() {
  return <ErrorBoundaryPage />;
}

export default function ChangeForgotPasswordRoute() {
  return <ChangeForgotPasswordPage />;
}

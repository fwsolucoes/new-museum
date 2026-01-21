import type { Route } from "+/route.customer.forgotPassword";
import { ErrorBoundaryPage } from "~/client/pages/errorBoundary";
import { ForgotPasswordPage } from "~/client/pages/forgotPassword";
import { ErrorHandlerAdapter } from "~/infra/adapters/errorHandlerAdapter";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";

export function meta(props: Route.MetaArgs) {
  return [{ title: `M2G2 | Esqueci minha senha` }];
}

export async function action(props: Route.ActionArgs) {
  try {
    return HttpAdapter.notImplemented("Forgot password not implemented");
  } catch (error) {
    return ErrorHandlerAdapter.handle(error);
  }
}

export function ErrorBoundary() {
  return <ErrorBoundaryPage />;
}

export default function ForgotPasswordRoute() {
  return <ForgotPasswordPage />;
}

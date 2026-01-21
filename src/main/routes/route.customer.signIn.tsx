import type { Route } from "+/route.customer.signIn";
import { SignInPage } from "~/client/pages/signIn";
import { ErrorHandlerAdapter } from "~/infra/adapters/errorHandlerAdapter";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { signCustomer } from "../factories/customer/signCustomerFactory";
import { ErrorBoundaryPage } from "~/client/pages/errorBoundary";

export function meta(props: Route.MetaArgs) {
  return [{ title: `M2G2 | Area do cliente` }];
}

export async function action(props: Route.ActionArgs) {
  try {
    const adaptedRoute = await RouteAdapter.adaptRoute(props);
    return await signCustomer.handle(adaptedRoute);
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

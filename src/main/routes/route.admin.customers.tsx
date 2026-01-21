import type { Route } from "+/route.admin.customers";
import { CustomersPage } from "~/client/pages/customers";
import { ErrorBoundaryPage } from "~/client/pages/errorBoundary";
import { DecodeActionAdapter } from "~/infra/adapters/decodeAction";
import { ErrorHandlerAdapter } from "~/infra/adapters/errorHandlerAdapter";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { createCustomer } from "../factories/customer/createCustomerFactory";
import { deleteCustomer } from "../factories/customer/deleteCustomerFactory";
import { listCustomers } from "../factories/customer/listCustomersFactory";
import { updateCustomer } from "../factories/customer/updateCustomerFactory";
import { listWallets } from "../factories/wallet/listWalletsFactory";

export function meta(props: Route.MetaArgs) {
  return [{ title: "M2G2 | Usuários" }];
}

export async function loader(args: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);

  const [customers, wallets] = await Promise.all([
    listCustomers.handle(adaptedRoute),
    listWallets.handle(adaptedRoute),
  ]);

  return { customers, wallets };
}

export async function action(args: Route.ActionArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);
  const _action = await DecodeActionAdapter.decode(adaptedRoute.request);

  try {
    switch (_action) {
      case "createCustomer":
        return await createCustomer.handle(adaptedRoute);
      case "updateCustomer":
        return await updateCustomer.handle(adaptedRoute);
      case "deleteCustomer":
        return await deleteCustomer.handle(adaptedRoute);
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

export default function CustomersRoute() {
  return <CustomersPage />;
}

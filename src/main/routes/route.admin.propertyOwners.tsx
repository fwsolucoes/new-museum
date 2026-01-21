import type { Route } from "+/route.admin.propertyOwners";
import { ErrorBoundaryPage } from "~/client/pages/errorBoundary";
import { PropertyOwnersPage } from "~/client/pages/propertyOwners";
import { DecodeActionAdapter } from "~/infra/adapters/decodeAction";
import { ErrorHandlerAdapter } from "~/infra/adapters/errorHandlerAdapter";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { createPropertyOwner } from "../factories/propertyOwner/createPropertyOwnerFactory";
import { deletePropertyOwner } from "../factories/propertyOwner/deletePropertyOwnerFactory";
import { listPropertyOwners } from "../factories/propertyOwner/listPropertyOwnersFactory";
import { updatePropertyOwner } from "../factories/propertyOwner/updatePropertyOwnerFactory";
import { listWallets } from "../factories/wallet/listWalletsFactory";

export function meta(props: Route.MetaArgs) {
  return [{ title: "M2G2 | Proprietários" }];
}

export async function loader(args: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);

  const [propertyOwners, wallets] = await Promise.all([
    listPropertyOwners.handle(adaptedRoute),
    listWallets.handle(adaptedRoute),
  ]);

  return { propertyOwners, wallets };
}

export async function action(args: Route.ActionArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);
  const _action = await DecodeActionAdapter.decode(adaptedRoute.request);

  try {
    switch (_action) {
      case "createPropertyOwner":
        return await createPropertyOwner.handle(adaptedRoute);
      case "updatePropertyOwner":
        return await updatePropertyOwner.handle(adaptedRoute);
      case "deletePropertyOwner":
        return await deletePropertyOwner.handle(adaptedRoute);
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

export default function PropertyOwnersRoute() {
  return <PropertyOwnersPage />;
}

import type { Route } from "+/route.admin.property";
import { ErrorBoundaryPage } from "~/client/pages/errorBoundary";
import { PropertyPage } from "~/client/pages/property";
import { DecodeActionAdapter } from "~/infra/adapters/decodeAction";
import { ErrorHandlerAdapter } from "~/infra/adapters/errorHandlerAdapter";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { listProperty } from "../factories/property/listPropertyFactory";
import { createPropertyDocument } from "../factories/propertyDocument/createPropertyDocumentFactory";
import { deletePropertyDocument } from "../factories/propertyDocument/deletePropertyDocumentFactory";
import { listPropertyDocuments } from "../factories/propertyDocument/listPropertyDocumentsFactory";
import { updatePropertyDocument } from "../factories/propertyDocument/updatePropertyDocumentFactory";
import { createPropertyHistory } from "../factories/propertyHistory/createPropertyHistoryFactory";
import { deletePropertyHistory } from "../factories/propertyHistory/deletePropertyHistoryFactory";
import { listPropertyHistories } from "../factories/propertyHistory/listPropertyHistoriesFactory";
import { listPropertyHistoryStatuses } from "../factories/propertyHistory/listPropertyHistoryStatusesFactory";
import { updatePropertyHistory } from "../factories/propertyHistory/updatePropertyHistoryFactory";

export function meta(props: Route.MetaArgs) {
  return [{ title: `M2G2 | Propriedade ${props.loaderData?.property.name}` }];
}

export async function loader(args: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);

  const [
    property,
    propertyDocuments,
    propertyHistories,
    propertyHistoryStatuses,
  ] = await Promise.all([
    listProperty.handle(adaptedRoute),
    listPropertyDocuments.handle(adaptedRoute),
    listPropertyHistories.handle(adaptedRoute),
    listPropertyHistoryStatuses.handle(adaptedRoute),
  ]);

  return {
    property,
    propertyDocuments,
    propertyHistories,
    propertyHistoryStatuses,
  };
}

export async function action(args: Route.ActionArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);
  const _action = await DecodeActionAdapter.decode(adaptedRoute.request);

  try {
    switch (_action) {
      case "createPropertyDocument":
        return await createPropertyDocument.handle(adaptedRoute);
      case "updatePropertyDocument":
        return await updatePropertyDocument.handle(adaptedRoute);
      case "deletePropertyDocument":
        return await deletePropertyDocument.handle(adaptedRoute);
      case "createPropertyHistory":
        return await createPropertyHistory.handle(adaptedRoute);
      case "updatePropertyHistory":
        return await updatePropertyHistory.handle(adaptedRoute);
      case "deletePropertyHistory":
        return await deletePropertyHistory.handle(adaptedRoute);
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

export default function PropertyRoute() {
  return <PropertyPage />;
}

import type { Route } from "+/route.createItem";
import { CreateItemPage } from "~/client/pages/createItem";

export function meta(props: Route.MetaArgs) {
  return [{ title: "Museu | Novo Item" }];
}

// export async function loader(args: Route.LoaderArgs) {
//   const adaptedRoute = await RouteAdapter.adaptRoute(args);

//   const items = await listItems.handle(adaptedRoute);

//   return { items };
// }

// export function ErrorBoundary() {
//   return <ErrorBoundaryPage />;
// }

export default function ItemNewRoute() {
  return <CreateItemPage />;
}

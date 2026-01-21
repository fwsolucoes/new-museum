import type { Route } from "+/layout.adminLayout";
import { PublicLayout } from "~/client/layouts/publicLayout";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";

// export async function loader(args: Route.LoaderArgs) {
//   const adaptedRoute = await RouteAdapter.adaptRoute(args);
//   return adaptedRoute;
// }

export default PublicLayout;

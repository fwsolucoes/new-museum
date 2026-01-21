import { Outlet } from "react-router";

import type { Route } from "./+types/root";
import { RootLayout, rootLinks, rootMeta } from "./client/layouts/rootLayout";
import { RouteAdapter } from "./infra/adapters/routeAdapter";
import { TranslationMiddleware } from "./main/middlewares/translation";
import { environmentVariables } from "./main/config/environmentVariables";

export async function loader(props: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(props);
  const language = TranslationMiddleware.getCurrentLanguage(adaptedRoute);

  return {
    language,
    environmentVariables: {
      GOOGLE_API_KEY: environmentVariables.GOOGLE_API_KEY,
      WHATSAPP_SUPPORT_NUMBER: environmentVariables.WHATSAPP_SUPPORT_NUMBER,
    },
  };
}

export const meta = rootMeta;
export const links = rootLinks;

export const Layout = RootLayout;
export default function RootRoute() {
  return <Outlet />;
}

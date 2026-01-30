import type { Route as PanelRoute } from "+/layout.panelLayout";
import { useMatches } from "react-router";

type PanelUser = PanelRoute.ComponentProps["loaderData"];

function useUser() {
  const matches = useMatches();

  const panelMatchUrl = "main/routes/layout.panelLayout";

  const panelMatch = matches.find((m) => m.id === panelMatchUrl);

  const panel = panelMatch?.loaderData as PanelUser | undefined;

  if (panel) return { user: panel };

  throw new Error("User layout match not found");
}

export { useUser };

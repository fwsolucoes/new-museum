import { useMatches } from "react-router";
import type { Route } from "../../+types/root";

function useRoot() {
  const matches = useMatches();
  const rootData = matches[0].loaderData as Route.ComponentProps["loaderData"];

  const language = rootData?.language ?? "ptBr";
  const environmentVariables = rootData?.environmentVariables;

  return { language, environmentVariables };
}

export { useRoot };

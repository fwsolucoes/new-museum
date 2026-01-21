import enJson from "../translate/en.json";
import ptBrJson from "../translate/ptBr.json";
import { useRoot } from "./useRoot";

type TranslateReturnType<K extends keyof typeof ptBrJson> =
  (typeof ptBrJson)[K];

function useTranslate<K extends keyof typeof ptBrJson>(
  key: K
): TranslateReturnType<K> {
  const { language } = useRoot();
  switch (language) {
    case "en":
      return enJson[key] as TranslateReturnType<K>;
    case "ptBr":
      return ptBrJson[key] as TranslateReturnType<K>;
    default:
      return ptBrJson[key] as TranslateReturnType<K>;
  }
}

export { useTranslate };

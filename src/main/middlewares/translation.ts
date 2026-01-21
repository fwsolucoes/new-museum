import { Translate } from "~/domain/translate/_translate";
import type { RouteDTO } from "../types/route";

class TranslationMiddleware {
  private static getBrowserLanguageFromRequest(request: Request): string {
    const acceptLanguage = request.headers.get("Accept-Language");
    if (!acceptLanguage) return "ptBr";

    const languages = acceptLanguage // ("en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7")
      .split(",")
      .map((lang) => {
        const [language, quality] = lang.trim().split(";q=");
        return {
          language: language.toLowerCase(),
          quality: quality ? parseFloat(quality) : 1.0,
        };
      })
      .sort((a, b) => b.quality - a.quality);

    for (const { language } of languages) {
      if (language.startsWith("en")) return "en";
      else if (language.startsWith("pt")) return "ptBr";
    }

    return "ptBr";
  }

  static translate(route: RouteDTO) {
    const lang = this.getCurrentLanguage(route);

    switch (lang) {
      case "en":
        Translate.changeLanguage("en");
        break;
      case "ptBr":
        Translate.changeLanguage("ptBr");
        break;
      default:
        Translate.changeLanguage("ptBr");
        break;
    }
  }

  static getCurrentLanguage(route: RouteDTO) {
    const browserLanguage = this.getBrowserLanguageFromRequest(route.request);
    return browserLanguage;
  }
}

export { TranslationMiddleware };

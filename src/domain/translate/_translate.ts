import {
  FormatAdapter,
  type CurrencyType,
} from "~/infra/adapters/formatAdapter";
import type { Language } from "~/main/types/language";

const currencyOutputFormat: Record<Language, CurrencyType> = {
  en: "USD",
  ptBr: "BRL",
};

abstract class Translate {
  static language: Language = "ptBr";

  static changeLanguage(language: Language) {
    this.language = language;
  }

  static formatDate(date: Date): string {
    return FormatAdapter.date(date);
  }

  static formatCurrency(amount: number): string {
    return FormatAdapter.currency({
      amount,
      outputFormat: currencyOutputFormat[this.language],
    });
  }
}

export { Translate };

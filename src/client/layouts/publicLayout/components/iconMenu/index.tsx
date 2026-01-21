import { Popover } from "@arkyn/components";
import { Check, ChevronDown } from "lucide-react";

import BrFlag from "~/client/assets/BR-flag.svg";
import EsFlag from "~/client/assets/ES-flag.svg";
import UsFlag from "~/client/assets/US-flag.svg";

import {
  IconMenuContainer,
  NavigationButton,
  PopoverContent,
  MainLanguageIcon,
  LanguageIcon,
  LanguageLabel,
} from "./styles";

function IconMenu() {
  const currentLanguage: string = "pt-BR";

  return (
    <Popover
      closeOnClick
      button={
        <IconMenuContainer>
          <MainLanguageIcon src={BrFlag} alt="Brazilian Flag" />
          <ChevronDown size={16} />
        </IconMenuContainer>
      }
    >
      <PopoverContent>
        <NavigationButton>
          <LanguageIcon src={BrFlag} alt="Brazilian Flag" />
          <LanguageLabel>Português do Brasil</LanguageLabel>
          {currentLanguage === "pt-BR" && <Check size={20} />}
        </NavigationButton>

        <NavigationButton>
          <LanguageIcon src={UsFlag} alt="US Flag" />
          <LanguageLabel>English</LanguageLabel>
          {currentLanguage === "en" && <Check size={20} />}
        </NavigationButton>

        <NavigationButton>
          <LanguageIcon src={EsFlag} alt="Spanish Flag" />
          <LanguageLabel>Español</LanguageLabel>
          {currentLanguage === "es" && <Check size={20} />}
        </NavigationButton>
      </PopoverContent>
    </Popover>
  );
}

export { IconMenu };

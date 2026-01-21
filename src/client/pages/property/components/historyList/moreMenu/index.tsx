import { IconButton, Popover, useModal } from "@arkyn/components";
import { FilePen, MoreVertical, Trash2 } from "lucide-react";

import { MoreButton, PopoverContent } from "./styles";

type MoreMenuProps = {
  historyData: any;
};

function MoreMenu({ historyData }: MoreMenuProps) {
  const { openModal } = useModal();

  return (
    <Popover
      closeOnClick
      orientation="topLeft"
      button={
        <IconButton
          aria-label="Mais opções"
          icon={MoreVertical}
          variant="invisible"
        />
      }
    >
      <PopoverContent>
        <MoreButton
          onClick={() => openModal("update-property-history", historyData)}
        >
          <FilePen />
          Atualizar
        </MoreButton>
        <MoreButton
          className="danger"
          onClick={() => openModal("delete-property-history", historyData)}
        >
          <Trash2 />
          Deletar
        </MoreButton>
      </PopoverContent>
    </Popover>
  );
}

export { MoreMenu };

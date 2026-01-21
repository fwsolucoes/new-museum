import { IconButton, Popover, useModal } from "@arkyn/components";
import { FilePen, MoreVertical, Trash2 } from "lucide-react";

import { MoreButton, PopoverContent } from "./styles";

type MoreMenuProps = {
  documentData: any;
};

function MoreMenu({ documentData }: MoreMenuProps) {
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
          onClick={() => openModal("update-property-document", documentData)}
        >
          <FilePen />
          Atualizar
        </MoreButton>
        <MoreButton
          className="danger"
          onClick={() => openModal("delete-property-document", documentData)}
        >
          <Trash2 />
          Deletar
        </MoreButton>
      </PopoverContent>
    </Popover>
  );
}

export { MoreMenu };

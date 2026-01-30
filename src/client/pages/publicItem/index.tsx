import { AudioPlayer } from "@arkyn/components";
import { Volume2 } from "lucide-react";
import { useLoaderData } from "react-router";

import { useState } from "react";
import { BottomDrawer } from "~/client/components/bottomDrawer";
import { DescriptionRenderer } from "~/client/components/DescriptionRenderer";
import type { ItemLoader } from "~/client/types/publicItemLoader";
import {
  AudioContent,
  ButtonDrawerContent,
  FloatingButton,
  ItemImage,
  ItemInfo,
  PageContainer,
} from "./styles";
import { EmptyImage } from "./components/EmptyImage";

function PublicItemPage() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { item } = useLoaderData<ItemLoader>();
  return (
    <PageContainer>
      {item.image ? (
        <ItemImage src={item.image} alt="Item Image" />
      ) : (
        <EmptyImage />
      )}

      <ItemInfo>
        <h1>{item.name}</h1>
        <AudioContent>
          <AudioPlayer src={item.audio} />
        </AudioContent>
        <DescriptionRenderer content={item.description} />
      </ItemInfo>

      <FloatingButton
        aria-label="Ouvir áudio"
        onClick={() => setDrawerOpen(true)}
      >
        <Volume2 size={28} />
      </FloatingButton>

      <BottomDrawer open={isDrawerOpen} onOpenChange={setDrawerOpen}>
        <ButtonDrawerContent>
          <h2>Ouvir Roteiro</h2>

          <AudioPlayer src={item.audio} />
        </ButtonDrawerContent>
      </BottomDrawer>
    </PageContainer>
  );
}

export { PublicItemPage };

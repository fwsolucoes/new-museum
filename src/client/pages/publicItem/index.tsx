import { AudioPlayer, useDrawer, useScopedParams } from "@arkyn/components";
import { Volume2 } from "lucide-react";
import { useActionData, useLocation, useNavigation } from "react-router";

import { useTranslate } from "~/client/hooks/useTranslate";
import {
  AudioContent,
  ButtonDrawerContent,
  FloatingButton,
  ItemImage,
  ItemInfo,
  PageContainer,
} from "./styles";
import { useState } from "react";
import { BottomDrawer } from "~/client/components/bottomDrawer";

function PublicItemPage() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const translate = useTranslate("forgotPassword");

  const data = useActionData();
  const { state } = useNavigation();

  const location = useLocation();
  const scopedParams = useScopedParams(location.search);

  const emailSent = scopedParams.getParam("emailSent");

  if (emailSent === "true") {
    return (
      <PageContainer>
        <div className="headerContainer">
          <strong>{translate.sentTitle}</strong>
          <p>{translate.sentDescription}</p>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <ItemImage
        src="https://images.unsplash.com/photo-1598564254441-be3be79c2b9a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Item Image"
      />

      <ItemInfo>
        <h1>Nome do Item</h1>

        <AudioContent>
          <AudioPlayer src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" />
        </AudioContent>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
          necessitatibus quibusdam, autem natus neque expedita fuga quasi nemo
          sapiente repellendus minima sed eligendi quos recusandae vitae tenetur
          cumque nihil mollitia.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas in
          aliquam, autem magnam inventore architecto! Eveniet, hic omnis ut
          mollitia doloribus inventore corrupti error voluptate ullam impedit
          similique illo non.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nemo
          pariatur culpa modi, dolore iusto quidem fugit esse quos, animi odit
          praesentium labore voluptates incidunt cumque numquam voluptas
          suscipit laudantium?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          fuga sed earum dolorum quis ipsa, delectus animi quae, dignissimos
          numquam impedit magni autem ut error! Quaerat autem hic aut expedita.
        </p>
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

          <AudioPlayer src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" />
        </ButtonDrawerContent>
      </BottomDrawer>
    </PageContainer>
  );
}

export { PublicItemPage };

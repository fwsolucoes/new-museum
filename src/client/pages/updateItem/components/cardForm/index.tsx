import {
  ImageUpload,
  Input,
  RichText,
  AudioUpload,
  FieldLabel,
  TabContainer,
  TabButton,
} from "@arkyn/components";

import { AudioComponent, Container, FormContainer } from "./styles";
import { useState } from "react";
import { useLoaderData } from "react-router";
import type { ItemLoader } from "~/client/types/itemLoader";

function CardForm() {
  const { item } = useLoaderData<ItemLoader>();
  const [activeTab, setActiveTab] = useState("audio-file");

  return (
    <Container>
      <input type="hidden" name="id" defaultValue={item.id} />
      <FormContainer>
        <Input
          name="code"
          label="Código:"
          showAsterisk
          defaultValue={item.code}
        />

        <Input
          name="name"
          label="Nome:"
          showAsterisk
          defaultValue={item.name}
        />

        <RichText
          name="description"
          label="Descrição:"
          showAsterisk
          defaultValue={item.description}
        />
        <ImageUpload
          name="image"
          action="/api/file-upload"
          label="Imagem:"
          acceptImage=".jpeg,.png"
          defaultValue={item.image}
        />

        <div className="inputImageInfo">
          <p>
            A dimensão recomendada é <b>600x600</b> pixels.
          </p>
          <p>
            Formato <b>JPEG ou PNG com no máximo 2MB</b>.
          </p>
        </div>

        {/* <Input name="video" label="Url do vídeo:" defaultValue={item.video} /> */}

        <AudioComponent>
          <FieldLabel htmlFor="audio">Áudio:</FieldLabel>
          <div className="content">
            <TabContainer
              defaultValue="audio-file"
              onChange={(value) => {
                setActiveTab(value);
              }}
            >
              <TabButton value="audio-file">Upload do arquivo</TabButton>
              <TabButton value="url-audio">Adicionar Url</TabButton>
            </TabContainer>

            <div className="audioField">
              {activeTab === "audio-file" && (
                <AudioUpload
                  name="audio"
                  action="/api/file-upload"
                  acceptAudio=".mp3"
                  selectAudioButtonText="Selecionar arquivo"
                  dropAudioText="Ou arraste e solte o arquivo aqui"
                  defaultValue={item.audio}
                />
              )}
              {activeTab === "url-audio" && (
                <Input
                  name="audio"
                  placeholder="Url do arquivo de áudio"
                  defaultValue={item.audio}
                />
              )}
              <div className="inputAudioInfo">
                <p>
                  Permitido apenas arquivos de áudio no formato <b>.mp3</b>.
                </p>
              </div>
            </div>
          </div>
        </AudioComponent>
      </FormContainer>
    </Container>
  );
}

export { CardForm };

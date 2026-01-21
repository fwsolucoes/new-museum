import { Button, IconButton, Pagination, useModal } from "@arkyn/components";
import { CircleAlert, Download, Plus } from "lucide-react";
import { useLoaderData } from "react-router";

import pdfFile from "~/client/assets/pdf-file.svg";
import { useFilter } from "~/client/hooks/useFilter";
import { useUser } from "~/client/hooks/useUser";
import type { PropertyLoader } from "~/client/types/propertyLoader";
import { MoreMenu } from "./moreMenu";
import {
  Container,
  EmptyContent,
  FooterContainer,
  Header,
  List,
  ListItem,
} from "./styles";

function DocumentList() {
  const { propertyDocuments } = useLoaderData<PropertyLoader>();
  const { openModal } = useModal("create-property-document");
  const { showTo } = useUser();

  function handleDownload(file: string) {
    window.open(file, "_blank");
  }

  const { handlePageChange } = useFilter("propertyDocuments");

  return (
    <Container>
      <Header>
        <strong>Documentos</strong>
        {showTo("admin") && (
          <Button variant="ghost" leftIcon={Plus} onClick={openModal}>
            Adicionar
          </Button>
        )}
      </Header>

      <List>
        {propertyDocuments.data.length === 0 && (
          <EmptyContent>
            <CircleAlert />
            <p>Nenhum documento disponível</p>
          </EmptyContent>
        )}

        {propertyDocuments.data.map((document) => (
          <ListItem key={document.id}>
            <img src={pdfFile} alt="PDF file icon" />
            <p>{document.name}</p>
            <IconButton
              aria-label="Download"
              icon={Download}
              variant="invisible"
              onClick={() => handleDownload(document.file)}
            />
            <MoreMenu documentData={document} />
          </ListItem>
        ))}
      </List>

      <FooterContainer>
        <p>
          Exibindo {propertyDocuments.meta.page} de{" "}
          {propertyDocuments.meta.totalPages} páginas
        </p>

        <Pagination
          currentPage={propertyDocuments.meta.page}
          totalCountRegisters={propertyDocuments.meta.totalItems}
          registerPerPage={propertyDocuments.meta.pageLimit}
          onChange={handlePageChange}
        />
      </FooterContainer>
    </Container>
  );
}

export { DocumentList };

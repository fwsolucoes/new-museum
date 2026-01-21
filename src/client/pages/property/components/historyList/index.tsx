import { Badge, Button, Pagination, useModal } from "@arkyn/components";
import { CircleAlert, Plus } from "lucide-react";
import { useLoaderData } from "react-router";

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

function HistoryList() {
  const { propertyHistories, propertyHistoryStatuses } =
    useLoaderData<PropertyLoader>();
  const { openModal } = useModal("create-property-history");

  const { handlePageChange } = useFilter("propertyHistories");
  const { showTo } = useUser();

  function getStatusName(statusId: string) {
    return propertyHistoryStatuses.find((status) => status.id === statusId)
      ?.name;
  }

  return (
    <Container>
      <Header>
        <strong>Históricos</strong>

        {showTo("admin") && (
          <Button variant="ghost" leftIcon={Plus} onClick={openModal}>
            Adicionar
          </Button>
        )}
      </Header>

      <List>
        {propertyHistories.data.length === 0 && (
          <EmptyContent>
            <CircleAlert />
            <p>Nenhum histórico disponível</p>
          </EmptyContent>
        )}

        {propertyHistories.data.map((history) => (
          <ListItem key={history.id}>
            <div>
              <strong>{history.name}</strong>
              <MoreMenu historyData={history} />
            </div>
            <div>
              <small>{history.occurredAt}</small>
              <Badge scheme="primary">{getStatusName(history.statusId)}</Badge>
            </div>
            <p>{history.description}</p>
          </ListItem>
        ))}
      </List>

      <FooterContainer>
        <p>
          Exibindo {propertyHistories.meta.page} de{" "}
          {propertyHistories.meta.totalPages} páginas
        </p>

        <Pagination
          currentPage={propertyHistories.meta.page}
          totalCountRegisters={propertyHistories.meta.totalItems}
          registerPerPage={propertyHistories.meta.pageLimit}
          onChange={handlePageChange}
        />
      </FooterContainer>
    </Container>
  );
}

export { HistoryList };

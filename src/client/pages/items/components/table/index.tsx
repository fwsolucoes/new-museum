import {
  Divider,
  IconButton,
  Input,
  Pagination,
  Select,
  TableBody,
  TableContainer,
  TableHeader,
  useModal,
} from "@arkyn/components";
import { Eye, PencilLine, QrCode, Search, Trash2 } from "lucide-react";
import { useLoaderData, useNavigate } from "react-router";

import { useFilter } from "~/client/hooks/useFilter";
import { useUser } from "~/client/hooks/useUser";
import { statusBadge } from "~/client/pages/dashboard/utilities/statusBadge";
import type { ItemsLoader } from "~/client/types/itemsLoader";
import { CaptionContainer, Container, FooterContainer } from "./styles";

function Table() {
  const { items } = useLoaderData<ItemsLoader>();

  const { openModal } = useModal();
  const navigate = useNavigate();

  const { user, showTo } = useUser();

  const {
    handleChangeFilter,
    handleChangeTimeoutFilter,
    handlePageChange,
    getParam,
  } = useFilter("items");

  return (
    <Container>
      <CaptionContainer>
        <Input
          name="name"
          label="Pesquisar:"
          rightIcon={Search}
          placeholder="Pesquisar por nome"
          defaultValue={getParam("name") || ""}
          onChange={(e) => handleChangeTimeoutFilter("name", e.target.value)}
        />
      </CaptionContainer>

      <TableContainer>
        <TableHeader>
          <th>Nome</th>
          <th>Cadastrado em</th>

          <th>Ações</th>
        </TableHeader>

        <TableBody>
          {items.data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.createdAt}</td>
              <td>
                <IconButton
                  aria-label="Visualizar item"
                  icon={Eye}
                  variant="invisible"
                  scheme="info"
                  onClick={() => navigate(`/item/${item.id}`)}
                />
                <IconButton
                  aria-label="Visualizar item"
                  icon={QrCode}
                  variant="invisible"
                  scheme="success"
                  // onClick={() =>
                  //   navigate(`/item/${item.id}`)
                  // }
                />
                <IconButton
                  aria-label="Atualizar item"
                  icon={PencilLine}
                  variant="invisible"
                  scheme="warning"
                  onClick={() => navigate(`/panel/item/${item.id}/update`)}
                />

                <IconButton
                  aria-label="Deletar item"
                  icon={Trash2}
                  variant="invisible"
                  scheme="danger"
                  onClick={() => openModal("delete-property", item)}
                />
              </td>
            </tr>
          ))}
        </TableBody>
      </TableContainer>

      <Divider />

      <FooterContainer>
        <p>
          Exibindo {items.meta.page} de {items.meta.totalPages} páginas
        </p>

        <Pagination
          currentPage={items.meta.page}
          totalCountRegisters={items.meta.totalItems}
          registerPerPage={items.meta.pageLimit}
          onChange={handlePageChange}
        />
      </FooterContainer>
    </Container>
  );
}

export { Table };

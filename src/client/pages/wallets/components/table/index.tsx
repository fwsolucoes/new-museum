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
import { Eye, PencilLine, Search, Trash2, Users } from "lucide-react";
import { useLoaderData, useNavigate } from "react-router";

import { useFilter } from "~/client/hooks/useFilter";
import type { WalletsLoader } from "~/client/types/walletsLoader";
import { statusBadge } from "../../utilities/statusBadge";
import { CaptionContainer, Container, FooterContainer } from "./styles";

function Table() {
  const { wallets } = useLoaderData<WalletsLoader>();
  const { openModal } = useModal();

  const navigate = useNavigate();

  const {
    handleChangeFilter,
    handleChangeTimeoutFilter,
    handlePageChange,
    getParam,
  } = useFilter("wallets");

  function handleOpenViewCustomers(walletId: string) {
    navigate(`/admin/customers?customers%3AwalletId=${walletId}`);
  }

  return (
    <Container>
      <CaptionContainer>
        <Input
          name="search"
          label="Pesquisar:"
          rightIcon={Search}
          placeholder="Pesquisar por nome"
          defaultValue={getParam("name") || ""}
          onChange={(e) => handleChangeTimeoutFilter("name", e.target.value)}
        />

        <Select
          name="status"
          label="Status:"
          placeholder="Todos"
          defaultValue={getParam("status") || ""}
          onChange={(e) => handleChangeFilter("status", e)}
          options={[
            { label: "Ativos", value: "active" },
            { label: "Inativos", value: "inactive" },
          ]}
        />
      </CaptionContainer>

      <TableContainer>
        <TableHeader>
          <th>Nome</th>
          <th>Status</th>
          <th>Data de criação</th>
          <th>Ações</th>
        </TableHeader>

        <TableBody>
          {wallets.data.map((wallet) => (
            <tr key={wallet.id}>
              <td>{wallet.name}</td>
              <td>{statusBadge(wallet.status)}</td>
              <td>{wallet.createdAt}</td>
              <td>
                <IconButton
                  aria-label="Visualizar usuários"
                  icon={Users}
                  variant="invisible"
                  scheme="info"
                  onClick={() => handleOpenViewCustomers(wallet.id)}
                />
                <IconButton
                  aria-label="Atualizar carteira"
                  icon={PencilLine}
                  variant="invisible"
                  scheme="warning"
                  onClick={() => openModal("update-wallet", wallet)}
                />
                <IconButton
                  aria-label="Deletar carteira"
                  icon={Trash2}
                  variant="invisible"
                  scheme="danger"
                  onClick={() => openModal("delete-wallet", wallet)}
                />
              </td>
            </tr>
          ))}
        </TableBody>
      </TableContainer>

      <Divider />

      <FooterContainer>
        <p>
          Exibindo {wallets.meta.page} de {wallets.meta.totalPages} páginas
        </p>
        <Pagination
          currentPage={wallets.meta.page}
          totalCountRegisters={wallets.meta.totalItems}
          registerPerPage={wallets.meta.pageLimit}
          onChange={handlePageChange}
        />
      </FooterContainer>
    </Container>
  );
}

export { Table };

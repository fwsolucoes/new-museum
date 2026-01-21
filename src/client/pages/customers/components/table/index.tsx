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
import { PencilLine, Search, Trash2 } from "lucide-react";
import { useLoaderData } from "react-router";

import { useFilter } from "~/client/hooks/useFilter";
import type { CustomersLoader } from "~/client/types/customersLoader";
import { getWalletName } from "../../utilities/getWalletName";
import { statusBadge } from "../../utilities/statusBadge";
import { CaptionContainer, Container, FooterContainer } from "./styles";

function Table() {
  const { customers, wallets } = useLoaderData<CustomersLoader>();
  const { openModal } = useModal();

  const {
    handleChangeFilter,
    handleChangeTimeoutFilter,
    handlePageChange,
    getParam,
  } = useFilter("customers");

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
          name="walletId"
          label="Carteira de imóveis:"
          placeholder="Todos"
          defaultValue={getParam("walletId") || ""}
          onChange={(e) => handleChangeFilter("walletId", e)}
          options={wallets.data.map((wallet) => ({
            label: wallet.name,
            value: wallet.id,
          }))}
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
          <th>E-mail</th>
          <th>Carteira de imóveis</th>
          <th>Status</th>
          <th>Data de criação</th>
          <th>Ações</th>
        </TableHeader>

        <TableBody>
          {customers.data.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{getWalletName(customer.walletId)}</td>
              <td>{statusBadge(customer.status)}</td>
              <td>{customer.createdAt}</td>
              <td>
                <IconButton
                  aria-label="Atualizar usuário"
                  icon={PencilLine}
                  variant="invisible"
                  scheme="warning"
                  onClick={() => openModal("update-customer", customer)}
                />
                <IconButton
                  aria-label="Deletar usuário"
                  icon={Trash2}
                  variant="invisible"
                  scheme="danger"
                  onClick={() => openModal("delete-customer", customer)}
                />
              </td>
            </tr>
          ))}
        </TableBody>
      </TableContainer>

      <Divider />

      <FooterContainer>
        <p>
          Exibindo {customers.meta.page} de {customers.meta.totalPages} páginas
        </p>

        <Pagination
          currentPage={customers.meta.page}
          totalCountRegisters={customers.meta.totalItems}
          registerPerPage={customers.meta.pageLimit}
          onChange={handlePageChange}
        />
      </FooterContainer>
    </Container>
  );
}

export { Table };

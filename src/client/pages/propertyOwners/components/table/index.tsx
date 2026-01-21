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

import type { PropertyOwnersLoader } from "~/client/types/propertyOwnersLoader";
import { statusBadge } from "../../utilities/statusBadge";
import { CaptionContainer, Container, FooterContainer } from "./styles";
import { useFilter } from "~/client/hooks/useFilter";

function Table() {
  const { propertyOwners } = useLoaderData<PropertyOwnersLoader>();
  const { openModal } = useModal();

  const {
    handleChangeFilter,
    handleChangeTimeoutFilter,
    handlePageChange,
    getParam,
  } = useFilter("propertyOwners");

  return (
    <Container>
      <CaptionContainer>
        <Input
          name="legalName"
          label="Pesquisar:"
          rightIcon={Search}
          placeholder="Pesquisar por nome"
          defaultValue={getParam("legalName") || ""}
          onChange={(e) =>
            handleChangeTimeoutFilter("legalName", e.target.value)
          }
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
          <th>Nome/Razão social</th>
          <th>CPF/CNPJ</th>
          <th>Total de imóveis</th>
          <th>Status</th>
          <th>Ações</th>
        </TableHeader>

        <TableBody>
          {propertyOwners.data.map((propertyOwner) => (
            <tr key={propertyOwner.id}>
              <td>{propertyOwner.legalName}</td>
              <td>{propertyOwner.taxIdentifierValue}</td>
              <td>{propertyOwner.propertiesCount}</td>
              <td>{statusBadge(propertyOwner.status)}</td>
              <td>
                <IconButton
                  aria-label="Atualizar proprietário"
                  icon={PencilLine}
                  variant="invisible"
                  scheme="warning"
                  onClick={() =>
                    openModal("update-property-owner", propertyOwner)
                  }
                />
                <IconButton
                  aria-label="Deletar proprietário"
                  icon={Trash2}
                  variant="invisible"
                  scheme="danger"
                  onClick={() =>
                    openModal("delete-property-owner", propertyOwner)
                  }
                />
              </td>
            </tr>
          ))}
        </TableBody>
      </TableContainer>

      <Divider />

      <FooterContainer>
        <p>
          Exibindo {propertyOwners.meta.page} de{" "}
          {propertyOwners.meta.totalPages} páginas
        </p>

        <Pagination
          currentPage={propertyOwners.meta.page}
          totalCountRegisters={propertyOwners.meta.totalItems}
          registerPerPage={propertyOwners.meta.pageLimit}
          onChange={handlePageChange}
        />
      </FooterContainer>
    </Container>
  );
}

export { Table };

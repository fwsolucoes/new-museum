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
import { Eye, PencilLine, Search, Trash2 } from "lucide-react";
import { useLoaderData, useNavigate } from "react-router";

import { useFilter } from "~/client/hooks/useFilter";
import { useUser } from "~/client/hooks/useUser";
import { statusBadge } from "~/client/pages/dashboard/utilities/statusBadge";
import type { PropertiesLoader } from "~/client/types/propertiesLoader";
import { CaptionContainer, Container, FooterContainer } from "./styles";

function Table() {
  const { properties, wallets, propertyOwners } =
    useLoaderData<PropertiesLoader>();

  const { openModal } = useModal();
  const navigate = useNavigate();

  const { user, showTo } = useUser();

  const {
    handleChangeFilter,
    handleChangeTimeoutFilter,
    handlePageChange,
    getParam,
  } = useFilter("properties");

  function getWalletId(data: string) {
    const propertyOwner = propertyOwners.data.find(
      (propertyOwner) => propertyOwner.id === data,
    );

    const wallet = wallets.data.find(
      (wallet) => wallet.id === propertyOwner?.walletId,
    );

    return wallet?.name;
  }

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
          {properties.data.map((property) => (
            <tr key={property.id}>
              <td>{property.name}</td>
              <td>{property.fullAddress}</td>
              <td>{getWalletId(property.propertyOwnerId)}</td>
              <td>{statusBadge(property.status)}</td>
              <td>
                <IconButton
                  aria-label="Visualizar imóvel"
                  icon={Eye}
                  variant="invisible"
                  scheme="info"
                  onClick={() =>
                    navigate(`/${user.type}/properties/${property.id}`)
                  }
                />

                {showTo("admin") && [
                  <IconButton
                    aria-label="Atualizar imóvel"
                    icon={PencilLine}
                    variant="invisible"
                    scheme="warning"
                    onClick={() =>
                      navigate(`/panel/properties/${property.id}/update`)
                    }
                  />,
                  <IconButton
                    aria-label="Deletar imóvel"
                    icon={Trash2}
                    variant="invisible"
                    scheme="danger"
                    onClick={() => openModal("delete-property", property)}
                  />,
                ]}
              </td>
            </tr>
          ))}
        </TableBody>
      </TableContainer>

      <Divider />

      <FooterContainer>
        <p>
          Exibindo {properties.meta.page} de {properties.meta.totalPages}{" "}
          páginas
        </p>

        <Pagination
          currentPage={properties.meta.page}
          totalCountRegisters={properties.meta.totalItems}
          registerPerPage={properties.meta.pageLimit}
          onChange={handlePageChange}
        />
      </FooterContainer>
    </Container>
  );
}

export { Table };

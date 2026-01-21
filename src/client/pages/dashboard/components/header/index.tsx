import { Select } from "@arkyn/components";
import { useLoaderData } from "react-router";
import { useFilter } from "~/client/hooks/useFilter";
import type { DashboardLoader } from "~/client/types/dashboardLoader";
import { Container } from "./styles";

function Header() {
  const { wallets } = useLoaderData<DashboardLoader>();

  const { handleChangeFilter, getParam } = useFilter("properties");

  return (
    <Container>
      <h1>Dashboard</h1>

      {wallets && (
        <Select
          name="walletId"
          onChange={(e) => handleChangeFilter("walletId", e)}
          defaultValue={getParam("walletId") || ""}
          options={wallets.data.map((wallet) => ({
            label: wallet.name,
            value: wallet.id,
          }))}
        />
      )}
    </Container>
  );
}

export { Header };

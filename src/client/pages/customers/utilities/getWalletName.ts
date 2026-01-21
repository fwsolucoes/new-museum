import { useLoaderData } from "react-router";
import type { CustomersLoader } from "~/client/types/customersLoader";

function getWalletName(walletId: string): string {
  const { wallets } = useLoaderData<CustomersLoader>();

  const wallet = wallets.data.find((wallet) => wallet.id === walletId);
  return wallet ? wallet.name : "Sem carteira";
}

export { getWalletName };

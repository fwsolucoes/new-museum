import type { SearchResult } from "~/app/shared/searchResult";
import type { Wallet } from "../entities/wallet";
import type { WalletSearchParams } from "~/app/search/walletSearchParams";

type CreateWalletProps = {
  name: string;
  description: string;
  since: Date;
};

type UpdateWalletProps = {
  id: string;
  name: string;
  description: string;
  since: Date;
  status: "active" | "inactive";
};

type WalletGatewayDTO = {
  listWallets: (
    searchParams: WalletSearchParams,
    token: string
  ) => Promise<SearchResult<Wallet>>;
  createWallet: (input: CreateWalletProps, token: string) => Promise<void>;
  updateWallet: (input: UpdateWalletProps, token: string) => Promise<void>;
  deleteWallet: (walletId: string, token: string) => Promise<void>;
};

export type { WalletGatewayDTO, CreateWalletProps, UpdateWalletProps };

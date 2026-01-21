import { WalletSearchParams } from "~/app/search/walletSearchParams";
import type { WalletGatewayDTO } from "~/domain/gateways/wallet";

type InputProps = {
  page?: number | null;
  filter: { name?: string; status?: string };
};

class ListWalletsUseCase {
  constructor(private walletGateway: WalletGatewayDTO) {}

  async execute(input: InputProps, token: string) {
    const { page, filter } = input;
    const searchParams = new WalletSearchParams({ page, filter });

    const wallets = await this.walletGateway.listWallets(searchParams, token);
    return wallets.toJson();
  }
}

export { ListWalletsUseCase };

import type { WalletGatewayDTO } from "~/domain/gateways/wallet";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";

class DeleteWalletUseCase {
  constructor(private walletGateway: WalletGatewayDTO) {}

  async execute(walletId: string, token: string) {
    await this.walletGateway.deleteWallet(walletId, token);
    return HttpAdapter.success("Carteira deletada com sucesso!");
  }
}

export { DeleteWalletUseCase };

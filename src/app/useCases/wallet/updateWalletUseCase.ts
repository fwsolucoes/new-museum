import type { WalletGatewayDTO } from "~/domain/gateways/wallet";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";

type InputProps = {
  id: string;
  name: string;
  description: string;
  since: Date;
  status: "active" | "inactive";
};

class UpdateWalletUseCase {
  constructor(private walletGateway: WalletGatewayDTO) {}

  async execute(input: InputProps, token: string) {
    await this.walletGateway.updateWallet(input, token);
    return HttpAdapter.updated("Carteira atualizada com sucesso!");
  }
}

export { UpdateWalletUseCase };

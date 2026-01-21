import type { WalletGatewayDTO } from "~/domain/gateways/wallet";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";

type InputProps = {
  name: string;
  description: string;
  since: Date;
};

class CreateWalletUseCase {
  constructor(private walletGateway: WalletGatewayDTO) {}

  async execute(input: InputProps, token: string) {
    await this.walletGateway.createWallet(input, token);
    return HttpAdapter.created("Carteira criada com sucesso!");
  }
}

export { CreateWalletUseCase };

import { CreateWalletUseCase } from "~/app/useCases/wallet/createWalletUseCase";
import { CreateWalletController } from "~/infra/controllers/wallet/createWalletController";
import { WalletGateway } from "~/infra/gateways/wallet";

const walletGateway = new WalletGateway();
const createWalletUseCase = new CreateWalletUseCase(walletGateway);
const createWalletController = new CreateWalletController(createWalletUseCase);

const createWallet = {
  handle: createWalletController.handle.bind(createWalletController),
};

export { createWallet };

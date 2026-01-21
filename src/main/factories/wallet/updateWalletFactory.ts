import { UpdateWalletUseCase } from "~/app/useCases/wallet/updateWalletUseCase";
import { UpdateWalletController } from "~/infra/controllers/wallet/updateWalletController";
import { WalletGateway } from "~/infra/gateways/wallet";

const walletGateway = new WalletGateway();
const updateWalletUseCase = new UpdateWalletUseCase(walletGateway);
const updateWalletController = new UpdateWalletController(updateWalletUseCase);

const updateWallet = {
  handle: updateWalletController.handle.bind(updateWalletController),
};

export { updateWallet };

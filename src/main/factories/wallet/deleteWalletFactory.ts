import { DeleteWalletUseCase } from "~/app/useCases/wallet/deleteWalletUseCase";
import { DeleteWalletController } from "~/infra/controllers/wallet/deleteWalletController";
import { WalletGateway } from "~/infra/gateways/wallet";

const walletGateway = new WalletGateway();
const deleteWalletUseCase = new DeleteWalletUseCase(walletGateway);
const deleteWalletController = new DeleteWalletController(deleteWalletUseCase);

const deleteWallet = {
  handle: deleteWalletController.handle.bind(deleteWalletController),
};

export { deleteWallet };

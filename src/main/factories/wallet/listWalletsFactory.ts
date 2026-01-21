import { ListWalletsUseCase } from "~/app/useCases/wallet/listWalletsUseCase";
import { ListWalletsController } from "~/infra/controllers/wallet/listWalletsController";
import { WalletGateway } from "~/infra/gateways/wallet";

const walletGateway = new WalletGateway();
const listWalletsUseCase = new ListWalletsUseCase(walletGateway);
const listWalletsController = new ListWalletsController(listWalletsUseCase);

const listWallets = {
  handle: listWalletsController.handle.bind(listWalletsController),
};

export { listWallets };

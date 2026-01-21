import { Wallet } from "~/domain/entities/wallet";
import type { ExternalWallet } from "../schemas/external/wallet";

class WalletMapper {
  static toEntity(externalWallet: ExternalWallet) {
    return Wallet.restore({
      id: externalWallet.id,
      name: externalWallet.name,
      description: externalWallet.description,
      status: externalWallet.status === "ACTIVE" ? "active" : "inactive",
      since: new Date(externalWallet.since),
      createdAt: new Date(externalWallet.createdAt),
      updatedAt: new Date(externalWallet.updatedAt),
    });
  }
}

export { WalletMapper };

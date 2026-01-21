import type { WalletSearchParams } from "~/app/search/walletSearchParams";
import { SearchResult } from "~/app/shared/searchResult";
import type { Wallet } from "~/domain/entities/wallet";
import type {
  CreateWalletProps,
  UpdateWalletProps,
  WalletGatewayDTO,
} from "~/domain/gateways/wallet";
import { HttpAdapter } from "../adapters/httpAdapter";
import { SchemaValidatorAdapter } from "../adapters/schemaValidatorAdapter";
import { api } from "../http/api";
import { WalletMapper } from "../mappers/wallet";
import { externalWalletsSchema } from "../schemas/external/wallet";

class WalletGateway implements WalletGatewayDTO {
  async listWallets(
    searchParams: WalletSearchParams,
    token: string
  ): Promise<SearchResult<Wallet>> {
    let url = "/wallets";
    url += searchParams.toExternal();

    const apiResponse = await api.get(url, { token });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);

    const schemaValidator = new SchemaValidatorAdapter(externalWalletsSchema);
    const externalWallets = schemaValidator.validate(apiResponse.response);

    return new SearchResult({
      data: externalWallets.items.map(WalletMapper.toEntity),
      meta: {
        page: externalWallets.page,
        pageLimit: externalWallets.take,
        totalItems: externalWallets.total,
      },
    });
  }

  async createWallet(body: CreateWalletProps, token: string): Promise<void> {
    const apiResponse = await api.post("/wallets", { body, token });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }

  async updateWallet(
    { id, ...body }: UpdateWalletProps,
    token: string
  ): Promise<void> {
    const apiResponse = await api.put(`/wallets/${id}`, { body, token });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }

  async deleteWallet(id: string, token: string): Promise<void> {
    const apiResponse = await api.delete(`/wallets/${id}`, { token });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }
}

export { WalletGateway };

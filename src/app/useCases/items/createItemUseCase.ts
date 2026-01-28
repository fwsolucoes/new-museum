import type { ItemGatewayDTO } from "~/domain/gateways/item";
import { RedirectServerAdapter } from "~/infra/adapters/redirectServerAdapter";
import type { CreateItemType } from "~/infra/schemas/internal/item";

class CreateItemUseCase {
  constructor(private itemGateway: ItemGatewayDTO) {}

  async execute(input: CreateItemType, accountId: string, token: string) {
    await this.itemGateway.createItem(input, accountId, token);
    throw RedirectServerAdapter.to("/panel/items");
  }
}

export { CreateItemUseCase };

import type { ItemGatewayDTO } from "~/domain/gateways/item";
import { RedirectServerAdapter } from "~/infra/adapters/redirectServerAdapter";
import type { UpdateItemType } from "~/infra/schemas/internal/item";

class UpdateUseCase {
  constructor(private itemGateway: ItemGatewayDTO) {}

  async execute(input: UpdateItemType, token: string) {
    await this.itemGateway.update(input, token);

    throw RedirectServerAdapter.to("/panel/items?updated=true");
  }
}

export { UpdateUseCase };

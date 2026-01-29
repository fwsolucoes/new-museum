import type { ItemGatewayDTO } from "~/domain/gateways/item";

class FindByIdUseCase {
  constructor(private itemGateway: ItemGatewayDTO) {}

  async execute(token: string, itemId: string) {
    const item = await this.itemGateway.findById(token, itemId);
    return item.toJson();
  }
}

export { FindByIdUseCase };

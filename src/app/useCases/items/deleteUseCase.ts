import type { ItemGatewayDTO } from "~/domain/gateways/item";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";
import type { DeleteItemType } from "~/infra/schemas/internal/item";

class DeleteUseCase {
  constructor(private itemGateway: ItemGatewayDTO) {}

  async execute(input: DeleteItemType, token: string) {
    await this.itemGateway.delete(input, token);

    return HttpAdapter.success("Item removido com sucesso!");
  }
}

export { DeleteUseCase };

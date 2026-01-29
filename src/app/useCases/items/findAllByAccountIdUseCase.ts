import { ItemSearchParams } from "~/app/search/ItemSearchParams";
import type { ItemGatewayDTO } from "~/domain/gateways/item";

type InputProps = {
  page?: number | null;
  search?: string | null;
};

class FindAllByAccountIdUseCase {
  constructor(private itemGateway: ItemGatewayDTO) {}

  async execute(input: InputProps, token: string, accountId: string) {
    const { page, search } = input;
    const searchParams = new ItemSearchParams({ page, search });
    const items = await this.itemGateway.findAllByAccountId(
      searchParams,
      accountId,
      token,
    );
    return items.toJson();
  }
}

export { FindAllByAccountIdUseCase };

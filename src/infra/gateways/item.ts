import type { ItemSearchParams } from "~/app/search/ItemSearchParams";
import { SearchResult } from "~/app/shared/searchResult";
import { Item } from "~/domain/entities/item";
import type { ItemGatewayDTO } from "~/domain/gateways/item";
import { environmentVariables as env } from "~/main/config/environmentVariables";
import { HttpAdapter } from "../adapters/httpAdapter";
import { SchemaValidatorAdapter } from "../adapters/schemaValidatorAdapter";
import { api } from "../http/api";
import { ItemMapper } from "../mappers/item";
import { externalItemsSchema } from "../schemas/external/item";

class ItemGateway implements ItemGatewayDTO {
  async listItems(
    searchParams: ItemSearchParams,
    accountId: string,
    token: string,
  ): Promise<SearchResult<Item>> {
    let url = `/${env.API_DATABASE}/${accountId}/museumItems/find_all`;
    url += searchParams.toExternal();

    const apiResponse = await api.get(url, { token });

    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);

    const schemaValidator = new SchemaValidatorAdapter(externalItemsSchema);

    const externalItems = schemaValidator.validate(apiResponse.response);

    return new SearchResult({
      data: externalItems.data.map(ItemMapper.toEntity),
      meta: {
        page: externalItems.meta.currentPage,
        pageLimit: externalItems.meta.itemsPerPage,
        totalItems: externalItems.meta.totalItems,
      },
    });
  }
}

export { ItemGateway };

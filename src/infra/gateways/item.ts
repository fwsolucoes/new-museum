import type { ItemSearchParams } from "~/app/search/ItemSearchParams";
import { SearchResult } from "~/app/shared/searchResult";
import { Item } from "~/domain/entities/item";
import type { ItemGatewayDTO } from "~/domain/gateways/item";
import { environmentVariables as env } from "~/main/config/environmentVariables";
import { HttpAdapter } from "../adapters/httpAdapter";
import { SchemaValidatorAdapter } from "../adapters/schemaValidatorAdapter";
import { api } from "../http/api";
import { ItemMapper } from "../mappers/item";
import {
  externalItemSchema,
  externalItemsSchema,
} from "../schemas/external/item";
import type { CreateItemType } from "../schemas/internal/item";

class ItemGateway implements ItemGatewayDTO {
  async findAllByAccountId(
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

  async findById(token: string, itemId: string): Promise<Item> {
    let url = `/${env.API_DATABASE}/${itemId}/museumItems`;

    const apiResponse = await api.get(url, { token });

    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);

    const schemaValidator = new SchemaValidatorAdapter(externalItemSchema);

    const externalItem = schemaValidator.validate(apiResponse.response);

    return ItemMapper.toEntity(externalItem);
  }

  async create(
    body: CreateItemType,
    accountId: string,
    token: string,
  ): Promise<void> {
    const url = `/${env.API_DATABASE}/${accountId}/museumItems`;

    const apiBody = {
      type: 1,
      code: body.code,
      name: body.name,
      description: body.description,
      image: body.image || "",
      audio: body.audio || "",
    };

    const apiResponse = await api.post(url, {
      body: apiBody,
      token,
    });

    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }
}

export { ItemGateway };

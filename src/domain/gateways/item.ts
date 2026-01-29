import type { ItemSearchParams } from "~/app/search/ItemSearchParams";
import type { SearchResult } from "~/app/shared/searchResult";
import type { Item } from "../entities/item";
import type {
  CreateItemType,
  UpdateItemType,
} from "~/infra/schemas/internal/item";

type ItemGatewayDTO = {
  findAllByAccountId: (
    searchParams: ItemSearchParams,
    token: string,
    accountId: string,
  ) => Promise<SearchResult<Item>>;
  findById: (token: string, itemId: string) => Promise<Item>;
  create: (
    input: CreateItemType,
    accountId: string,
    token: string,
  ) => Promise<void>;
  update: (input: UpdateItemType, token: string) => Promise<void>;
};

export type { ItemGatewayDTO };

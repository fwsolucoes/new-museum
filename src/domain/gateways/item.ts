import type { ItemSearchParams } from "~/app/search/ItemSearchParams";
import type { SearchResult } from "~/app/shared/searchResult";
import type { Item } from "../entities/item";

type ItemGatewayDTO = {
  listItems: (
    searchParams: ItemSearchParams,
    token: string,
    accountId: string,
  ) => Promise<SearchResult<Item>>;
};

export type { ItemGatewayDTO };

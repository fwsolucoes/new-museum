import type { PropertyHistorySearchParams } from "~/app/search/propertyHistorySearchParams";
import type { PropertyHistory } from "../entities/propertyHistory";
import { SearchResult } from "~/app/shared/searchResult";

type CreatePropertyHistoryProps = {
  propertyId: string;
  name: string;
  description?: string;
  statusId: string;
  occurredAt: Date;
};

type UpdatePropertyHistoryProps = {
  id: string;
  name: string;
  description?: string;
  statusId: string;
  occurredAt: Date;
};

type PropertyHistoryGatewayDTO = {
  listStatuses: (token: string) => Promise<Array<{ id: string; name: string }>>;

  listPropertyHistories: (
    searchParams: PropertyHistorySearchParams,
    token: string
  ) => Promise<SearchResult<PropertyHistory>>;

  createPropertyHistory: (
    input: CreatePropertyHistoryProps,
    token: string
  ) => Promise<void>;

  updatePropertyHistory: (
    input: UpdatePropertyHistoryProps,
    token: string
  ) => Promise<void>;

  deletePropertyHistory: (
    propertyHistoryId: string,
    token: string
  ) => Promise<void>;
};

export type {
  CreatePropertyHistoryProps,
  PropertyHistoryGatewayDTO,
  UpdatePropertyHistoryProps,
};

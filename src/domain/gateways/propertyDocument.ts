import type { PropertyDocumentSearchParams } from "~/app/search/propertyDocumentSearchParams";
import type { SearchResult } from "~/app/shared/searchResult";
import type { PropertyDocument } from "../entities/propertyDocument";

type CreatePropertyDocumentProps = {
  propertyId: string;
  name: string;
  description?: string;
  file: string;
};

type UpdatePropertyDocumentProps = {
  id: string;
  name: string;
  description?: string;
  file: string;
};

type PropertyDocumentGatewayDTO = {
  listPropertyDocuments: (
    search: PropertyDocumentSearchParams,
    token: string
  ) => Promise<SearchResult<PropertyDocument>>;

  createPropertyDocument: (
    input: CreatePropertyDocumentProps,
    token: string
  ) => Promise<void>;

  updatePropertyDocument: (
    input: UpdatePropertyDocumentProps,
    token: string
  ) => Promise<void>;

  deletePropertyDocument: (
    propertyDocumentId: string,
    token: string
  ) => Promise<void>;
};

export type {
  CreatePropertyDocumentProps,
  PropertyDocumentGatewayDTO,
  UpdatePropertyDocumentProps,
};

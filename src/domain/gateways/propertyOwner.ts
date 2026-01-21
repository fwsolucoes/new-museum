import type { PropertyOwnerSearchParams } from "~/app/search/propertyOwnerSearchParams";
import type { PropertyOwner } from "../entities/propertyOwner";
import { SearchResult } from "~/app/shared/searchResult";

type CreatePropertyOwnerProps = {
  reference: string;
  walletId: string;
  tradeName: string;
  legalName: string;
  taxIdentifierKind: "pj" | "pf";
  taxIdentifierValue: string;
  status: "active" | "inactive";
};

type UpdatePropertyOwnerProps = {
  id: string;
  reference: string;
  walletId: string;
  tradeName: string;
  legalName: string;
  taxIdentifierKind: "pj" | "pf";
  taxIdentifierValue: string;
  status: "active" | "inactive";
};

type PropertyOwnerGatewayDTO = {
  listPropertyOwners: (
    searchParams: PropertyOwnerSearchParams,
    token: string
  ) => Promise<SearchResult<PropertyOwner>>;

  createPropertyOwner: (
    input: CreatePropertyOwnerProps,
    token: string
  ) => Promise<void>;

  updatePropertyOwner: (
    input: UpdatePropertyOwnerProps,
    token: string
  ) => Promise<void>;

  deletePropertyOwner: (
    propertyOwnerId: string,
    token: string
  ) => Promise<void>;
};

export type {
  CreatePropertyOwnerProps,
  PropertyOwnerGatewayDTO,
  UpdatePropertyOwnerProps,
};

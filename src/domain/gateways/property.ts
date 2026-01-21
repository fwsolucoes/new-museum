import type { PropertySearchParams } from "~/app/search/propertySearchParams";
import type { Property } from "../entities/property";
import type { SearchResult } from "~/app/shared/searchResult";

type CreatePropertyProps = {
  image: string;
  propertyOwnerId: string;
  status: "underRegularization" | "sold";
  registration: string;
  reference: string;
  name: string;
  description: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  street: string;
  number: string;
  neighborhood: string;
  complement: string;
  city: string;
  state: string;
  fullAddress: string;
  walletId: string;
};

type UpdatePropertyProps = {
  id: string;
  images: string;
  status: "underRegularization" | "sold";
  registration: string;
  reference: string;
  name: string;
  description: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  street: string;
  number: string;
  neighborhood: string;
  complement: string;
  city: string;
  state: string;
  fullAddress: string;
  walletId: string;
  propertyOwnerId: string;
};

type PropertyMetrics = {
  total: number;
  rented: number;
  vacant: number;
  undergoingRegularization: number;
  legal: number;
  defaulters: number;
};

type PropertyGatewayDTO = {
  findById: (id: string, token: string) => Promise<Property>;
  listProperties: (
    searchParams: PropertySearchParams,
    token: string
  ) => Promise<SearchResult<Property>>;
  createProperty: (input: CreatePropertyProps, token: string) => Promise<void>;
  updateProperty: (input: UpdatePropertyProps, token: string) => Promise<void>;
  deleteProperty: (propertyId: string, token: string) => Promise<void>;
  findMetrics: (token: string, walletId?: string) => Promise<PropertyMetrics>;
  findMapView: (token: string, walletId?: string) => Promise<Property[]>;
};

export type {
  PropertyGatewayDTO,
  PropertyMetrics,
  CreatePropertyProps,
  UpdatePropertyProps,
};

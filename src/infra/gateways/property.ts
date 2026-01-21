import type { PropertySearchParams } from "~/app/search/propertySearchParams";
import { SearchResult } from "~/app/shared/searchResult";
import { Property } from "~/domain/entities/property";
import type {
  CreatePropertyProps,
  PropertyGatewayDTO,
  PropertyMetrics,
  UpdatePropertyProps,
} from "~/domain/gateways/property";
import { HttpAdapter } from "../adapters/httpAdapter";
import { SchemaValidatorAdapter } from "../adapters/schemaValidatorAdapter";
import { api } from "../http/api";
import { PropertyMapper } from "../mappers/property";
import {
  externalMapViewsSchema,
  externalPropertiesSchema,
  externalPropertyMetricsSchema,
  externalPropertySchema,
} from "../schemas/external/property";

class PropertyGateway implements PropertyGatewayDTO {
  async findMapView(token: string, walletId?: string): Promise<Property[]> {
    let url = `/properties/map-view`;
    if (walletId) url += `?walletId=${walletId}`;
    const apiResponse = await api.get(url, { token });

    const schemaValidator = new SchemaValidatorAdapter(externalMapViewsSchema);
    const externalProperty = schemaValidator.validate(apiResponse.response);

    return externalProperty.map(PropertyMapper.toEntity);
  }

  async findMetrics(
    token: string,
    walletId?: string
  ): Promise<PropertyMetrics> {
    let url = `/properties/status-count`;
    if (walletId) url += `?walletId=${walletId}`;

    const apiResponse = await api.get(url, { token });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);

    const schemaValidator = new SchemaValidatorAdapter(
      externalPropertyMetricsSchema
    );

    const externalPropertyMetrics = schemaValidator.validate(
      apiResponse.response
    );

    return {
      defaulters: externalPropertyMetrics.AVAILABLE,
      legal: externalPropertyMetrics.RENTED_LEGAL,
      rented: externalPropertyMetrics.RENTED_NORMAL,
      total: externalPropertyMetrics.TOTAL,
      undergoingRegularization: externalPropertyMetrics.UNDER_REGULARIZATION,
      vacant: externalPropertyMetrics.RENTED_VACANT,
    };
  }

  async findById(id: string, token: string): Promise<Property> {
    const url = `/properties/${id}`;
    const apiResponse = await api.get(url, { token });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);

    const schemaValidator = new SchemaValidatorAdapter(externalPropertySchema);
    const externalProperty = schemaValidator.validate(apiResponse.response);

    return PropertyMapper.toEntity(externalProperty);
  }

  async listProperties(
    searchParams: PropertySearchParams,
    token: string
  ): Promise<SearchResult<Property>> {
    let url = "/properties";
    url += searchParams.toExternal();

    const apiResponse = await api.get(url, { token });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);

    const schemaValidator = new SchemaValidatorAdapter(
      externalPropertiesSchema
    );

    const externalProperties = schemaValidator.validate(apiResponse.response);

    return new SearchResult({
      data: externalProperties.items.map(PropertyMapper.toEntity),
      meta: {
        page: externalProperties.page,
        pageLimit: externalProperties.take,
        totalItems: externalProperties.total,
      },
    });
  }

  async createProperty(
    body: CreatePropertyProps,
    token: string
  ): Promise<void> {
    const { fullAddress, walletId, status: rawStatus, ...sendApi } = body;
    const status = rawStatus === "sold" ? "SOLD" : "UNDER_REGULARIZATION";

    const apiResponse = await api.post("/properties", {
      body: { ...sendApi, usageType: "RESIDENTIAL", status },
      token,
    });

    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }

  async updateProperty(
    body: UpdatePropertyProps,
    token: string
  ): Promise<void> {
    const {
      status: rawStatus,
      fullAddress,
      walletId,
      propertyOwnerId,
      ...sendApi
    } = body;

    const status = rawStatus === "sold" ? "SOLD" : "UNDER_REGULARIZATION";

    const apiResponse = await api.put(`/properties`, {
      body: { ...sendApi, usageType: "RESIDENTIAL", status },
      token,
    });

    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }

  async deleteProperty(id: string, token: string): Promise<void> {
    const apiResponse = await api.delete(`/properties/${id}`, { token });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }
}

export { PropertyGateway };

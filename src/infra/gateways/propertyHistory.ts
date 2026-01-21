import type { PropertyHistorySearchParams } from "~/app/search/propertyHistorySearchParams";
import { SearchResult } from "~/app/shared/searchResult";
import type { PropertyHistory } from "~/domain/entities/propertyHistory";
import type {
  CreatePropertyHistoryProps,
  PropertyHistoryGatewayDTO,
  UpdatePropertyHistoryProps,
} from "~/domain/gateways/propertyHistory";
import { HttpAdapter } from "../adapters/httpAdapter";
import { SchemaValidatorAdapter } from "../adapters/schemaValidatorAdapter";
import { api } from "../http/api";
import { PropertyHistoryMapper } from "../mappers/propertyHistory";
import { externalPropertyHistoriesSchema } from "../schemas/external/propertyHistory";

class PropertyHistoryGateway implements PropertyHistoryGatewayDTO {
  async listStatuses(
    token: string
  ): Promise<Array<{ id: string; name: string }>> {
    const apiResponse = await api.get("/property-histories/status", {
      token,
    });

    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);

    return apiResponse.response.map((status: any) => ({
      id: status.id,
      name: status.status,
    }));
  }

  async listPropertyHistories(
    searchParams: PropertyHistorySearchParams,
    token: string
  ): Promise<SearchResult<PropertyHistory>> {
    let url = "/property-histories";
    url += searchParams.toExternal();

    const apiResponse = await api.get(url, { token });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);

    const schemaValidator = new SchemaValidatorAdapter(
      externalPropertyHistoriesSchema
    );
    const externalPropertyHistories = schemaValidator.validate(
      apiResponse.response
    );

    return new SearchResult({
      data: externalPropertyHistories.items.map(PropertyHistoryMapper.toEntity),
      meta: {
        page: externalPropertyHistories.page,
        pageLimit: externalPropertyHistories.take,
        totalItems: externalPropertyHistories.total,
      },
    });
  }

  async createPropertyHistory(
    body: CreatePropertyHistoryProps,
    token: string
  ): Promise<void> {
    const apiResponse = await api.post("/property-histories", {
      body,
      token,
    });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }

  async updatePropertyHistory(
    { id, ...body }: UpdatePropertyHistoryProps,
    token: string
  ): Promise<void> {
    const apiResponse = await api.put(`/property-histories/${id}`, {
      body,
      token,
    });

    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }

  async deletePropertyHistory(id: string, token: string): Promise<void> {
    const apiResponse = await api.delete(`/property-histories/${id}`, {
      token,
    });

    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }
}

export { PropertyHistoryGateway };

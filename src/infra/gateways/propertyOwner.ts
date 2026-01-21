import type { PropertyOwner } from "~/domain/entities/propertyOwner";
import type {
  CreatePropertyOwnerProps,
  UpdatePropertyOwnerProps,
  PropertyOwnerGatewayDTO,
} from "~/domain/gateways/propertyOwner";
import { HttpAdapter } from "../adapters/httpAdapter";
import { SchemaValidatorAdapter } from "../adapters/schemaValidatorAdapter";
import { api } from "../http/api";
import { PropertyOwnerMapper } from "../mappers/propertyOwner";
import { externalPropertyOwnersSchema } from "../schemas/external/propertyOwner";
import type { PropertyOwnerSearchParams } from "~/app/search/propertyOwnerSearchParams";
import { SearchResult } from "~/app/shared/searchResult";

class PropertyOwnerGateway implements PropertyOwnerGatewayDTO {
  async listPropertyOwners(
    searchParams: PropertyOwnerSearchParams,
    token: string
  ): Promise<SearchResult<PropertyOwner>> {
    let url = "/property-owners";
    url += searchParams.toExternal();

    const apiResponse = await api.get(url, { token });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);

    const schemaValidator = new SchemaValidatorAdapter(
      externalPropertyOwnersSchema
    );
    const externalPropertyOwners = schemaValidator.validate(
      apiResponse.response
    );

    return new SearchResult({
      data: externalPropertyOwners.items.map(PropertyOwnerMapper.toEntity),
      meta: {
        page: externalPropertyOwners.page,
        pageLimit: externalPropertyOwners.take,
        totalItems: externalPropertyOwners.total,
      },
    });
  }

  async createPropertyOwner(
    body: CreatePropertyOwnerProps,
    token: string
  ): Promise<void> {
    const payload = {
      ...body,
      taxIdentifierKind: body.taxIdentifierKind.toUpperCase(),
      status: body.status.toUpperCase(),
    };

    const apiResponse = await api.post("/property-owners", {
      body: payload,
      token,
    });

    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }

  async updatePropertyOwner(
    { id, ...body }: UpdatePropertyOwnerProps,
    token: string
  ): Promise<void> {
    const payload = {
      ...body,
      taxIdentifierKind: body.taxIdentifierKind.toUpperCase(),
      status: body.status.toUpperCase(),
    };

    const apiResponse = await api.put(`/property-owners/${id}`, {
      body: payload,
      token,
    });

    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }

  async deletePropertyOwner(id: string, token: string): Promise<void> {
    const apiResponse = await api.delete(`/property-owners/${id}`, { token });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }
}

export { PropertyOwnerGateway };

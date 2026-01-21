import type { PropertyDocumentSearchParams } from "~/app/search/propertyDocumentSearchParams";
import { SearchResult } from "~/app/shared/searchResult";
import type { PropertyDocument } from "~/domain/entities/propertyDocument";
import type {
  CreatePropertyDocumentProps,
  PropertyDocumentGatewayDTO,
  UpdatePropertyDocumentProps,
} from "~/domain/gateways/propertyDocument";
import { HttpAdapter } from "../adapters/httpAdapter";
import { SchemaValidatorAdapter } from "../adapters/schemaValidatorAdapter";
import { api } from "../http/api";
import { PropertyDocumentMapper } from "../mappers/propertyDocument";
import { externalPropertyDocumentsSchema } from "../schemas/external/propertyDocument";

class PropertyDocumentGateway implements PropertyDocumentGatewayDTO {
  async listPropertyDocuments(
    searchParams: PropertyDocumentSearchParams,
    token: string
  ): Promise<SearchResult<PropertyDocument>> {
    let url = "/property-documentations";
    url += searchParams.toExternal();

    const apiResponse = await api.get(url, { token });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);

    const schemaValidator = new SchemaValidatorAdapter(
      externalPropertyDocumentsSchema
    );
    const externalPropertyDocuments = schemaValidator.validate(
      apiResponse.response
    );

    return new SearchResult({
      data: externalPropertyDocuments.items.map(
        PropertyDocumentMapper.toEntity
      ),
      meta: {
        page: externalPropertyDocuments.page,
        pageLimit: externalPropertyDocuments.take,
        totalItems: externalPropertyDocuments.total,
      },
    });
  }

  async createPropertyDocument(
    body: CreatePropertyDocumentProps,
    token: string
  ): Promise<void> {
    const apiResponse = await api.post("/property-documentations", {
      body,
      token,
    });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }

  async updatePropertyDocument(
    { id, ...body }: UpdatePropertyDocumentProps,
    token: string
  ): Promise<void> {
    const apiResponse = await api.put(`/property-documentations/${id}`, {
      body,
      token,
    });

    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }

  async deletePropertyDocument(id: string, token: string): Promise<void> {
    const apiResponse = await api.delete(`/property-documentations/${id}`, {
      token,
    });

    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }
}

export { PropertyDocumentGateway };

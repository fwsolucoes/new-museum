import type { CustomerSearchParams } from "~/app/search/customerSearchParams";
import { SearchResult } from "~/app/shared/searchResult";
import type { Customer } from "~/domain/entities/customer";
import type {
  CreateCustomerProps,
  CustomerGatewayDTO,
  SignCustomerProps,
  UpdateCustomerProps,
} from "~/domain/gateways/customer";
import { HttpAdapter } from "../adapters/httpAdapter";
import { JwtAdapter } from "../adapters/jwtAdapter";
import { SchemaValidatorAdapter } from "../adapters/schemaValidatorAdapter";
import { api } from "../http/api";
import { CustomerMapper } from "../mappers/customer";
import {
  externalCustomersSchema,
  externalSignCustomerSchema,
  externalTokenSchema,
} from "../schemas/external/customer";

class CustomerGateway implements CustomerGatewayDTO {
  async signCustomer(customer: SignCustomerProps): Promise<[Customer, string]> {
    const apiResponse = await api.post("/customers/login", { body: customer });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);

    const tokenValidator = new SchemaValidatorAdapter(externalTokenSchema);
    const token = tokenValidator.validate(apiResponse.response);

    const decoded = JwtAdapter.decode(token.jwt);

    const schemaValidator = new SchemaValidatorAdapter(
      externalSignCustomerSchema,
    );

    const validatedExternalData = schemaValidator.validate({
      ...decoded,
      id: decoded.sub,
    });

    return [
      CustomerMapper.toEntity({ ...validatedExternalData, deletedAt: null }),
      token.jwt,
    ] as const;
  }

  async listCustomers(
    searchParams: CustomerSearchParams,
    token: string,
  ): Promise<SearchResult<Customer>> {
    let url = "/customers";
    url += searchParams.toExternal();

    const apiResponse = await api.get(url, { token });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);

    const schemaValidator = new SchemaValidatorAdapter(externalCustomersSchema);
    const externalCustomers = schemaValidator.validate(apiResponse.response);

    return new SearchResult({
      data: externalCustomers.items.map(CustomerMapper.toEntity),
      meta: {
        page: externalCustomers.page,
        pageLimit: externalCustomers.take,
        totalItems: externalCustomers.total,
      },
    });
  }

  async createCustomer(
    body: CreateCustomerProps,
    token: string,
  ): Promise<void> {
    const apiResponse = await api.post("/customers", { body, token });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }

  async updateCustomer(
    { id, ...body }: UpdateCustomerProps,
    token: string,
  ): Promise<void> {
    const apiResponse = await api.put(`/customers/${id}`, { body, token });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }

  async deleteCustomer(id: string, token: string): Promise<void> {
    const apiResponse = await api.delete(`/customers/${id}`, { token });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }
}

export { CustomerGateway };

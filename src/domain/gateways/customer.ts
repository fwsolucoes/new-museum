import type { SearchResult } from "~/app/shared/searchResult";
import type { Customer } from "../entities/customer";
import type { CustomerSearchParams } from "~/app/search/customerSearchParams";

type SignCustomerProps = {
  email: string;
  password: string;
};

type CreateCustomerProps = {
  name: string;
  email: string;
  password: string;
  walletId: string;
};

type UpdateCustomerProps = {
  id: string;
  name: string;
  email: string;
  password: string | null;
  walletId: string;
};

type CustomerGatewayDTO = {
  signCustomer: (input: SignCustomerProps) => Promise<[Customer, string]>;
  listCustomers: (
    searchParams: CustomerSearchParams,
    token: string
  ) => Promise<SearchResult<Customer>>;
  createCustomer: (input: CreateCustomerProps, token: string) => Promise<void>;
  updateCustomer: (input: UpdateCustomerProps, token: string) => Promise<void>;
  deleteCustomer: (customerId: string, token: string) => Promise<void>;
};

export type {
  CreateCustomerProps,
  CustomerGatewayDTO,
  SignCustomerProps,
  UpdateCustomerProps,
};

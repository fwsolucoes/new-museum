import { CustomerSearchParams } from "~/app/search/customerSearchParams";
import type { CustomerGatewayDTO } from "~/domain/gateways/customer";

type InputProps = {
  page?: number | null;
  filter: { name?: string; status?: string };
};

class ListCustomersUseCase {
  constructor(private customerGateway: CustomerGatewayDTO) {}

  async execute(input: InputProps, token: string) {
    const { page, filter } = input;
    const searchParams = new CustomerSearchParams({ page, filter });

    const customers = await this.customerGateway.listCustomers(
      searchParams,
      token
    );

    return customers.toJson();
  }
}

export { ListCustomersUseCase };

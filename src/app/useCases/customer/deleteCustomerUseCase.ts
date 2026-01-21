import type { CustomerGatewayDTO } from "~/domain/gateways/customer";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";

class DeleteCustomerUseCase {
  constructor(private customerGateway: CustomerGatewayDTO) {}

  async execute(customerId: string, token: string) {
    await this.customerGateway.deleteCustomer(customerId, token);
    return HttpAdapter.success("Usuário deletado com sucesso!");
  }
}

export { DeleteCustomerUseCase };

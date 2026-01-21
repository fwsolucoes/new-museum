import type { CustomerGatewayDTO } from "~/domain/gateways/customer";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";

type InputProps = {
  name: string;
  email: string;
  password: string;
  walletId: string;
};

class CreateCustomerUseCase {
  constructor(private customerGateway: CustomerGatewayDTO) {}

  async execute(input: InputProps, token: string) {
    await this.customerGateway.createCustomer(input, token);
    return HttpAdapter.created("Usuário criado com sucesso!");
  }
}

export { CreateCustomerUseCase };

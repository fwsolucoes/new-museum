import type { CustomerGatewayDTO } from "~/domain/gateways/customer";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";

type InputProps = {
  id: string;
  name: string;
  email: string;
  password: string | null;
  walletId: string;
};

class UpdateCustomerUseCase {
  constructor(private customerGateway: CustomerGatewayDTO) {}

  async execute(input: InputProps, token: string) {
    await this.customerGateway.updateCustomer(input, token);
    return HttpAdapter.updated("Usuário atualizado com sucesso!");
  }
}

export { UpdateCustomerUseCase };

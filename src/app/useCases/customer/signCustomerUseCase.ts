import type { CustomerGatewayDTO } from "~/domain/gateways/customer";

type InputProps = {
  email: string;
  password: string;
};

class SignCustomerUseCase {
  constructor(private customerGateway: CustomerGatewayDTO) {}

  async execute(input: InputProps) {
    const { password, email } = input;

    const [customer, token] = await this.customerGateway.signCustomer({
      password,
      email,
    });

    return [customer.toJson(), token] as const;
  }
}

export { SignCustomerUseCase };

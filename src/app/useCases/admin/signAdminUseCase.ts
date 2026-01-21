import type { AdminGatewayDTO } from "~/domain/gateways/admin";

type InputProps = {
  email: string;
  password: string;
};

class SignAdminUseCase {
  constructor(private adminGateway: AdminGatewayDTO) {}

  async execute(input: InputProps) {
    const { password, email } = input;

    const [admin, token] = await this.adminGateway.signAdmin({
      password,
      email,
    });

    return [admin.toJson(), token] as const;
  }
}

export { SignAdminUseCase };

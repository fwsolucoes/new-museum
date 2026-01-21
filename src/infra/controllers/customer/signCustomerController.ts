import type { SignCustomerUseCase } from "~/app/useCases/customer/signCustomerUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { signCustomerSchema } from "~/infra/schemas/internal/customer";
import { AuthService } from "~/infra/services/authService";
import type { RouteDTO } from "~/main/types/route";

class SignCustomerController {
  constructor(private signCustomerUseCase: SignCustomerUseCase) {}

  async handle(route: RouteDTO) {
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(signCustomerSchema);
    const data = schemaValidator.validate(body);
    const [customer, token] = await this.signCustomerUseCase.execute(data);

    return await AuthService.setAuthStorage(
      route,
      {
        avatar: customer.avatar,
        email: customer.email,
        id: customer.id,
        name: customer.name,
        walletId: customer.walletId,
        type: "customer",
        token,
      },
      "/customer/dashboard",
    );
  }
}

export { SignCustomerController };

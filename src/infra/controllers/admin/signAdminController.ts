import type { SignAdminUseCase } from "~/app/useCases/admin/signAdminUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { signAdminSchema } from "~/infra/schemas/internal/admin";
import { AuthService } from "~/infra/services/authService";
import type { RouteDTO } from "~/main/types/route";

class SignAdminController {
  constructor(private signAdminUseCase: SignAdminUseCase) {}

  async handle(route: RouteDTO) {
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(signAdminSchema);
    const data = schemaValidator.validate(body);
    const [admin, token] = await this.signAdminUseCase.execute(data);

    return await AuthService.setAuthStorage(
      route,
      {
        avatar: admin.avatar,
        email: admin.email,
        id: admin.id,
        name: admin.name,
        walletId: undefined,
        type: "admin",
        token,
      },
      "/admin/dashboard",
    );
  }
}

export { SignAdminController };

import type { UpdateWalletUseCase } from "~/app/useCases/wallet/updateWalletUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { updateWalletSchema } from "~/infra/schemas/internal/wallet";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class UpdateWalletController {
  constructor(private updateWalletUseCase: UpdateWalletUseCase) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(updateWalletSchema);
    const validatedBody = schemaValidator.validate(body);

    return await this.updateWalletUseCase.execute(validatedBody, token);
  }
}

export { UpdateWalletController };

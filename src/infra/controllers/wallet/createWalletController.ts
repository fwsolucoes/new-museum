import type { CreateWalletUseCase } from "~/app/useCases/wallet/createWalletUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { createWalletSchema } from "~/infra/schemas/internal/wallet";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class CreateWalletController {
  constructor(private createWalletUseCase: CreateWalletUseCase) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(createWalletSchema);
    const validatedBody = schemaValidator.validate(body);

    return await this.createWalletUseCase.execute(validatedBody, token);
  }
}

export { CreateWalletController };

import type { DeleteWalletUseCase } from "~/app/useCases/wallet/deleteWalletUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { deleteWalletSchema } from "~/infra/schemas/internal/wallet";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class DeleteWalletController {
  constructor(private deleteWalletUseCase: DeleteWalletUseCase) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(deleteWalletSchema);
    const validatedBody = schemaValidator.validate(body);

    return await this.deleteWalletUseCase.execute(validatedBody.id, token);
  }
}

export { DeleteWalletController };

import type { DeleteUseCase } from "~/app/useCases/items/deleteUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { deleteItemSchema } from "~/infra/schemas/internal/item";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class DeleteController {
  constructor(private deleteUseCase: DeleteUseCase) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(deleteItemSchema);
    const validatedBody = schemaValidator.validate(body);

    return await this.deleteUseCase.execute(validatedBody, token);
  }
}

export { DeleteController };

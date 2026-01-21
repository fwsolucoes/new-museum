import type { DeletePropertyOwnerUseCase } from "~/app/useCases/propertyOwner/deletePropertyOwnerUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { deletePropertyOwnerSchema } from "~/infra/schemas/internal/propertyOwner";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class DeletePropertyOwnerController {
  constructor(private deletePropertyOwnerUseCase: DeletePropertyOwnerUseCase) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(
      deletePropertyOwnerSchema,
    );
    const validatedBody = schemaValidator.validate(body);

    return await this.deletePropertyOwnerUseCase.execute(
      validatedBody.id,
      token,
    );
  }
}

export { DeletePropertyOwnerController };

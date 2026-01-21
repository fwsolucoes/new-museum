import type { UpdatePropertyOwnerUseCase } from "~/app/useCases/propertyOwner/updatePropertyOwnerUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { updatePropertyOwnerSchema } from "~/infra/schemas/internal/propertyOwner";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class UpdatePropertyOwnerController {
  constructor(private updatePropertyOwnerUseCase: UpdatePropertyOwnerUseCase) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(
      updatePropertyOwnerSchema,
    );
    const validatedBody = schemaValidator.validate(body);

    return await this.updatePropertyOwnerUseCase.execute(validatedBody, token);
  }
}

export { UpdatePropertyOwnerController };

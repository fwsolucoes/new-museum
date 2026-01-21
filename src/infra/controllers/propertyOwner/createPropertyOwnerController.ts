import type { CreatePropertyOwnerUseCase } from "~/app/useCases/propertyOwner/createPropertyOwnerUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { createPropertyOwnerSchema } from "~/infra/schemas/internal/propertyOwner";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class CreatePropertyOwnerController {
  constructor(private createPropertyOwnerUseCase: CreatePropertyOwnerUseCase) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(
      createPropertyOwnerSchema,
    );
    const validatedBody = schemaValidator.validate(body);

    return await this.createPropertyOwnerUseCase.execute(validatedBody, token);
  }
}

export { CreatePropertyOwnerController };

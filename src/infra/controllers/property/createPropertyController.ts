import type { CreatePropertyUseCase } from "~/app/useCases/property/createPropertyUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { createPropertySchema } from "~/infra/schemas/internal/property";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class CreatePropertyController {
  constructor(private createPropertyUseCase: CreatePropertyUseCase) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(createPropertySchema);
    const validatedBody = schemaValidator.validate(body);

    return await this.createPropertyUseCase.execute(validatedBody, token);
  }
}

export { CreatePropertyController };

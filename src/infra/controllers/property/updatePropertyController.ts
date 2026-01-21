import type { UpdatePropertyUseCase } from "~/app/useCases/property/updatePropertyUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { updatePropertySchema } from "~/infra/schemas/internal/property";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class UpdatePropertyController {
  constructor(private updatePropertyUseCase: UpdatePropertyUseCase) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const id = route.params?.propertyId;

    const schemaValidator = new SchemaValidatorAdapter(updatePropertySchema);
    const validatedBody = schemaValidator.validate({ ...body, id });

    return await this.updatePropertyUseCase.execute(validatedBody, token);
  }
}

export { UpdatePropertyController };

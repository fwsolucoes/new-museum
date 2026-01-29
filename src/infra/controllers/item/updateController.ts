import type { UpdateUseCase } from "~/app/useCases/items/updateUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { updateItemSchema } from "~/infra/schemas/internal/item";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class UpdateController {
  constructor(private updateUseCase: UpdateUseCase) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(updateItemSchema);
    const validatedBody = schemaValidator.validate(body);

    return await this.updateUseCase.execute(validatedBody, token);
  }
}

export { UpdateController };

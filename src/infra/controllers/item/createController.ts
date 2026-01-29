import type { CreateUseCase } from "~/app/useCases/items/createUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { createItemSchema } from "~/infra/schemas/internal/item";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class CreateController {
  constructor(private createUseCase: CreateUseCase) {}

  async handle(route: RouteDTO) {
    const { token, accountId } = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(createItemSchema);
    const validatedBody = schemaValidator.validate(body);

    return await this.createUseCase.execute(validatedBody, accountId, token);
  }
}

export { CreateController };

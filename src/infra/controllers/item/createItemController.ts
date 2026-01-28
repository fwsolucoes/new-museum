import type { CreateItemUseCase } from "~/app/useCases/items/createItemUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { createItemSchema } from "~/infra/schemas/internal/item";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class CreateItemController {
  constructor(private createItemUseCase: CreateItemUseCase) {}

  async handle(route: RouteDTO) {
    const { token, accountId } = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(createItemSchema);
    const validatedBody = schemaValidator.validate(body);

    return await this.createItemUseCase.execute(
      validatedBody,
      accountId,
      token,
    );
  }
}

export { CreateItemController };

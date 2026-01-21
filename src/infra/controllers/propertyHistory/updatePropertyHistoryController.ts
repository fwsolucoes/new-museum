import type { UpdatePropertyHistoryUseCase } from "~/app/useCases/propertyHistory/updatePropertyHistoryUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { updatePropertyHistorySchema } from "~/infra/schemas/internal/propertyHistory";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class UpdatePropertyHistoryController {
  constructor(
    private updatePropertyHistoryUseCase: UpdatePropertyHistoryUseCase,
  ) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(
      updatePropertyHistorySchema,
    );
    const validatedBody = schemaValidator.validate(body);

    return await this.updatePropertyHistoryUseCase.execute(
      validatedBody,
      token,
    );
  }
}

export { UpdatePropertyHistoryController };

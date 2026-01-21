import type { DeletePropertyHistoryUseCase } from "~/app/useCases/propertyHistory/deletePropertyHistoryUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { deletePropertyHistorySchema } from "~/infra/schemas/internal/propertyHistory";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class DeletePropertyHistoryController {
  constructor(
    private deletePropertyHistoryUseCase: DeletePropertyHistoryUseCase,
  ) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(
      deletePropertyHistorySchema,
    );
    const validatedBody = schemaValidator.validate(body);

    return await this.deletePropertyHistoryUseCase.execute(
      validatedBody.id,
      token,
    );
  }
}

export { DeletePropertyHistoryController };

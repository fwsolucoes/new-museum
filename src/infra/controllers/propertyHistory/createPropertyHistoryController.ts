import type { CreatePropertyHistoryUseCase } from "~/app/useCases/propertyHistory/createPropertyHistoryUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { createPropertyHistorySchema } from "~/infra/schemas/internal/propertyHistory";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class CreatePropertyHistoryController {
  constructor(
    private createPropertyHistoryUseCase: CreatePropertyHistoryUseCase,
  ) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);
    const propertyId = route.params.propertyId;

    const schemaValidator = new SchemaValidatorAdapter(
      createPropertyHistorySchema,
    );

    const validatedBody = schemaValidator.validate({ ...body, propertyId });

    return await this.createPropertyHistoryUseCase.execute(
      validatedBody,
      token,
    );
  }
}

export { CreatePropertyHistoryController };

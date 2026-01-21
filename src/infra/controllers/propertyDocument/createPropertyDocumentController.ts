import type { CreatePropertyDocumentUseCase } from "~/app/useCases/propertyDocument/createPropertyDocumentUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { createPropertyDocumentSchema } from "~/infra/schemas/internal/propertyDocument";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class CreatePropertyDocumentController {
  constructor(
    private createPropertyDocumentUseCase: CreatePropertyDocumentUseCase,
  ) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);
    const propertyId = route.params.propertyId;

    const schemaValidator = new SchemaValidatorAdapter(
      createPropertyDocumentSchema,
    );

    const validatedBody = schemaValidator.validate({ ...body, propertyId });

    return await this.createPropertyDocumentUseCase.execute(
      validatedBody,
      token,
    );
  }
}

export { CreatePropertyDocumentController };

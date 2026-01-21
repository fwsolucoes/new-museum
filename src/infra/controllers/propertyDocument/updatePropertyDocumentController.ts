import type { UpdatePropertyDocumentUseCase } from "~/app/useCases/propertyDocument/updatePropertyDocumentUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { updatePropertyDocumentSchema } from "~/infra/schemas/internal/propertyDocument";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class UpdatePropertyDocumentController {
  constructor(
    private updatePropertyDocumentUseCase: UpdatePropertyDocumentUseCase,
  ) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(
      updatePropertyDocumentSchema,
    );
    const validatedBody = schemaValidator.validate(body);

    return await this.updatePropertyDocumentUseCase.execute(
      validatedBody,
      token,
    );
  }
}

export { UpdatePropertyDocumentController };

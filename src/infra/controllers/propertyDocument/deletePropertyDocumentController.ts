import type { DeletePropertyDocumentUseCase } from "~/app/useCases/propertyDocument/deletePropertyDocumentUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { deletePropertyDocumentSchema } from "~/infra/schemas/internal/propertyDocument";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class DeletePropertyDocumentController {
  constructor(
    private deletePropertyDocumentUseCase: DeletePropertyDocumentUseCase,
  ) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(
      deletePropertyDocumentSchema,
    );
    const validatedBody = schemaValidator.validate(body);

    return await this.deletePropertyDocumentUseCase.execute(
      validatedBody.id,
      token,
    );
  }
}

export { DeletePropertyDocumentController };

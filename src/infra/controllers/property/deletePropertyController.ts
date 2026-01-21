import { ChartNoAxesColumnDecreasing } from "lucide-react";
import type { DeletePropertyUseCase } from "~/app/useCases/property/deletePropertyUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { deletePropertySchema } from "~/infra/schemas/internal/property";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class DeletePropertyController {
  constructor(private deletePropertyUseCase: DeletePropertyUseCase) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(deletePropertySchema);
    const validatedBody = schemaValidator.validate({ id: body.id });

    return await this.deletePropertyUseCase.execute(validatedBody.id, token);
  }
}

export { DeletePropertyController };

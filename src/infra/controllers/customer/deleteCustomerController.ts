import type { DeleteCustomerUseCase } from "~/app/useCases/customer/deleteCustomerUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { deleteCustomerSchema } from "~/infra/schemas/internal/customer";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class DeleteCustomerController {
  constructor(private deleteCustomerUseCase: DeleteCustomerUseCase) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(deleteCustomerSchema);
    const validatedBody = schemaValidator.validate(body);

    return await this.deleteCustomerUseCase.execute(validatedBody.id, token);
  }
}

export { DeleteCustomerController };

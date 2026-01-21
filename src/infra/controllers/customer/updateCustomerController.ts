import type { UpdateCustomerUseCase } from "~/app/useCases/customer/updateCustomerUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { updateCustomerSchema } from "~/infra/schemas/internal/customer";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class UpdateCustomerController {
  constructor(private updateCustomerUseCase: UpdateCustomerUseCase) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(updateCustomerSchema);
    const validatedBody = schemaValidator.validate(body);

    return await this.updateCustomerUseCase.execute(validatedBody, token);
  }
}

export { UpdateCustomerController };

import type { CreateCustomerUseCase } from "~/app/useCases/customer/createCustomerUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { createCustomerSchema } from "~/infra/schemas/internal/customer";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class CreateCustomerController {
  constructor(private createCustomerUseCase: CreateCustomerUseCase) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(createCustomerSchema);
    const validatedBody = schemaValidator.validate(body);

    return await this.createCustomerUseCase.execute(validatedBody, token);
  }
}

export { CreateCustomerController };

import { SearchParamsMapper } from "~/app/shared/searchParamsMapper";
import type { ListCustomersUseCase } from "~/app/useCases/customer/listCustomersUseCase";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { listCustomersSchema } from "~/infra/schemas/internal/customer";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class ListCustomersController {
  constructor(private listCustomersUseCase: ListCustomersUseCase) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);

    const searchParams = SearchParamsMapper.toObject({
      query: route.query,
      params: route.params,
      scoped: "customers",
    });

    const schemaValidator = new SchemaValidatorAdapter(listCustomersSchema);
    const validatedParams = schemaValidator.validate(searchParams);
    const mappedFilter = SearchParamsMapper.toFilter(validatedParams);

    return await this.listCustomersUseCase.execute(mappedFilter, token);
  }
}

export { ListCustomersController };

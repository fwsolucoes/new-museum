import { SearchParamsMapper } from "~/app/shared/searchParamsMapper";
import type { FindAllByAccountIdUseCase } from "~/app/useCases/items/findAllByAccountIdUseCase";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { findAllItemsSchema } from "~/infra/schemas/internal/item";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class FindAllByAccountIdController {
  constructor(private findAllByAccountIdUseCase: FindAllByAccountIdUseCase) {}

  async handle(route: RouteDTO) {
    const { token, accountId } = await AuthMiddleware.authenticate(route);

    const searchParams = SearchParamsMapper.toObject({
      query: route.query,
      params: route.params,
      scoped: "items",
    });

    const schemaValidator = new SchemaValidatorAdapter(findAllItemsSchema);
    const validatedParams = schemaValidator.validate(searchParams);

    const mappedFilter = SearchParamsMapper.toFilter(validatedParams);

    const response = await this.findAllByAccountIdUseCase.execute(
      mappedFilter,
      token,
      accountId,
    );

    return response;
  }
}

export { FindAllByAccountIdController };

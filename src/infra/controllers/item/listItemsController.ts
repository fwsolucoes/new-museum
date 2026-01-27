import { SearchParamsMapper } from "~/app/shared/searchParamsMapper";
import type { ListItemsUseCase } from "~/app/useCases/items/listItemsUseCase";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { listItemSchema } from "~/infra/schemas/internal/item";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class ListItemsController {
  constructor(private listItemsUseCase: ListItemsUseCase) {}

  async handle(route: RouteDTO) {
    const { token, accountId } = await AuthMiddleware.authenticate(route);

    const searchParams = SearchParamsMapper.toObject({
      query: route.query,
      params: route.params,
      scoped: "items",
    });

    const schemaValidator = new SchemaValidatorAdapter(listItemSchema);
    const validatedParams = schemaValidator.validate(searchParams);

    const mappedFilter = SearchParamsMapper.toFilter(validatedParams);

    const response = await this.listItemsUseCase.execute(
      mappedFilter,
      token,
      accountId,
    );

    return response;
  }
}

export { ListItemsController };

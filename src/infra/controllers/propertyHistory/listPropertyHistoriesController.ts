import { SearchParamsMapper } from "~/app/shared/searchParamsMapper";
import type { ListPropertyHistoriesUseCase } from "~/app/useCases/propertyHistory/listPropertyHistoriesUseCase";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { listPropertyHistoriesSchema } from "~/infra/schemas/internal/propertyHistory";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class ListPropertyHistoriesController {
  constructor(
    private listPropertyHistoriesUseCase: ListPropertyHistoriesUseCase,
  ) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);

    const searchParams = SearchParamsMapper.toObject({
      query: route.query,
      params: route.params,
      scoped: "propertyHistories",
    });

    const schemaValidator = new SchemaValidatorAdapter(
      listPropertyHistoriesSchema,
    );

    const validatedParams = schemaValidator.validate(searchParams);
    const mappedFilter = SearchParamsMapper.toFilter(validatedParams);

    return await this.listPropertyHistoriesUseCase.execute(mappedFilter, token);
  }
}

export { ListPropertyHistoriesController };

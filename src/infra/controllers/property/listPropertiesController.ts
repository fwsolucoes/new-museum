import { SearchParamsMapper } from "~/app/shared/searchParamsMapper";
import type { ListPropertiesUseCase } from "~/app/useCases/property/listPropertiesUseCase";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { listPropertySchema } from "~/infra/schemas/internal/property";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class ListPropertiesController {
  constructor(private listPropertiesUseCase: ListPropertiesUseCase) {}

  async handle(route: RouteDTO) {
    const { token, walletId } = await AuthMiddleware.authenticate(route);

    const searchParams = SearchParamsMapper.toObject({
      query: route.query,
      params: route.params,
      scoped: "properties",
    });

    const schemaValidator = new SchemaValidatorAdapter(listPropertySchema);
    const validatedParams = schemaValidator.validate({
      ...searchParams,
      walletId,
    });

    const mappedFilter = SearchParamsMapper.toFilter(validatedParams);

    return await this.listPropertiesUseCase.execute(mappedFilter, token);
  }
}

export { ListPropertiesController };

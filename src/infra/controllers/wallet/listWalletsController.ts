import { SearchParamsMapper } from "~/app/shared/searchParamsMapper";
import type { ListWalletsUseCase } from "~/app/useCases/wallet/listWalletsUseCase";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { listWalletsSchema } from "~/infra/schemas/internal/wallet";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class ListWalletsController {
  constructor(private listWalletsUseCase: ListWalletsUseCase) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);

    const searchParams = SearchParamsMapper.toObject({
      query: route.query,
      params: route.params,
      scoped: "wallets",
    });

    const schemaValidator = new SchemaValidatorAdapter(listWalletsSchema);
    const validatedParams = schemaValidator.validate(searchParams);
    const mappedFilter = SearchParamsMapper.toFilter(validatedParams);

    return await this.listWalletsUseCase.execute(mappedFilter, token);
  }
}

export { ListWalletsController };

import { SearchParamsMapper } from "~/app/shared/searchParamsMapper";
import type { ListPropertyOwnersUseCase } from "~/app/useCases/propertyOwner/listPropertyOwnersUseCase";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { listPropertyOwnersSchema } from "~/infra/schemas/internal/propertyOwner";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class ListPropertyOwnersController {
  constructor(private listPropertyOwnersUseCase: ListPropertyOwnersUseCase) {}

  async handle(route: RouteDTO) {
    const { token, walletId } = await AuthMiddleware.authenticate(route);

    const searchParams = SearchParamsMapper.toObject({
      query: route.query,
      params: route.params,
      scoped: "propertyOwners",
    });

    const schemaValidator = new SchemaValidatorAdapter(
      listPropertyOwnersSchema,
    );

    const validatedParams = schemaValidator.validate({
      ...searchParams,
      walletId,
    });

    const mappedFilter = SearchParamsMapper.toFilter(validatedParams);

    return await this.listPropertyOwnersUseCase.execute(mappedFilter, token);
  }
}

export { ListPropertyOwnersController };

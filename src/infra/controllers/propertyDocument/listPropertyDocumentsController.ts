import { SearchParamsMapper } from "~/app/shared/searchParamsMapper";
import type { ListPropertyDocumentsUseCase } from "~/app/useCases/propertyDocument/listPropertyDocumentsUseCase";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { listPropertyDocumentsSchema } from "~/infra/schemas/internal/propertyDocument";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class ListPropertyDocumentsController {
  constructor(
    private listPropertyDocumentsUseCase: ListPropertyDocumentsUseCase,
  ) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);

    const searchParams = SearchParamsMapper.toObject({
      query: route.query,
      params: route.params,
      scoped: "propertyDocuments",
    });

    const schemaValidator = new SchemaValidatorAdapter(
      listPropertyDocumentsSchema,
    );

    const validatedParams = schemaValidator.validate(searchParams);
    const mappedFilter = SearchParamsMapper.toFilter(validatedParams);

    return await this.listPropertyDocumentsUseCase.execute(mappedFilter, token);
  }
}

export { ListPropertyDocumentsController };

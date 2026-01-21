import type { ListPropertyUseCase } from "~/app/useCases/property/listPropertyUseCase";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class ListPropertyController {
  constructor(private listPropertyUseCase: ListPropertyUseCase) {}

  async handle(route: RouteDTO) {
    const propertyId = route.params.propertyId;
    if (!propertyId) throw HttpAdapter.badRequest("Property ID is required");

    const { token } = await AuthMiddleware.authenticate(route);

    return await this.listPropertyUseCase.execute(propertyId, token);
  }
}

export { ListPropertyController };

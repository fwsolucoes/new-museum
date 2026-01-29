import type { FindByIdUseCase } from "~/app/useCases/items/findByIdUseCase";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class FindByIdController {
  constructor(private findByIdUseCase: FindByIdUseCase) {}

  async handle(route: RouteDTO) {
    const itemId = route.params.id;
    if (!itemId) {
      throw new Error("Item ID is required");
    }
    const { token } = await AuthMiddleware.authenticate(route);

    const response = await this.findByIdUseCase.execute(token, itemId);

    return response;
  }
}

export { FindByIdController };

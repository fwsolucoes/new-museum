import type { ListPropertyHistoryStatusesUseCase } from "~/app/useCases/propertyHistory/listPropertyHistoryStatusesUseCase";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class ListPropertyHistoryStatusesController {
  constructor(
    private listPropertyHistoryStatusesUseCase: ListPropertyHistoryStatusesUseCase,
  ) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);
    return await this.listPropertyHistoryStatusesUseCase.execute(token);
  }
}

export { ListPropertyHistoryStatusesController };

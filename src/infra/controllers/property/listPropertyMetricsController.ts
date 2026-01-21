import type { ListPropertyMetricsUseCase } from "~/app/useCases/property/listPropertyMetricsUseCase";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class ListPropertyMetricsController {
  constructor(private listPropertyMetricsUseCase: ListPropertyMetricsUseCase) {}

  async handle(route: RouteDTO) {
    const { token, walletId: rawWalletId } =
      await AuthMiddleware.authenticate(route);

    const walletId = route.query?.walletId ?? rawWalletId ?? undefined;

    return await this.listPropertyMetricsUseCase.execute(token, walletId);
  }
}

export { ListPropertyMetricsController };

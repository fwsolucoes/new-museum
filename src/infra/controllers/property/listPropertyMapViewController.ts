import type { ListPropertyMapViewUseCase } from "~/app/useCases/property/listPropertyMapViewUseCase";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class ListPropertyMapViewController {
  constructor(private listPropertyMapViewUseCase: ListPropertyMapViewUseCase) {}

  async handle(route: RouteDTO) {
    const { token, walletId: rawWalletId } =
      await AuthMiddleware.authenticate(route);

    const walletId = route.query?.walletId ?? rawWalletId ?? undefined;

    return await this.listPropertyMapViewUseCase.execute(token, walletId);
  }
}

export { ListPropertyMapViewController };

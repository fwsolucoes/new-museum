import type { PropertyHistoryGatewayDTO } from "~/domain/gateways/propertyHistory";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";

class DeletePropertyHistoryUseCase {
  constructor(private propertyHistoryGateway: PropertyHistoryGatewayDTO) {}

  async execute(propertyHistoryId: string, token: string) {
    await this.propertyHistoryGateway.deletePropertyHistory(
      propertyHistoryId,
      token
    );

    return HttpAdapter.success("Histórico deletado com sucesso!");
  }
}

export { DeletePropertyHistoryUseCase };

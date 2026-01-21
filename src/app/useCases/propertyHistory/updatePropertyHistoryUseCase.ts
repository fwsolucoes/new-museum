import type { PropertyHistoryGatewayDTO } from "~/domain/gateways/propertyHistory";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";

type InputProps = {
  id: string;
  name: string;
  description?: string;
  statusId: string;
  occurredAt: Date;
};

class UpdatePropertyHistoryUseCase {
  constructor(private propertyHistoryGateway: PropertyHistoryGatewayDTO) {}

  async execute(input: InputProps, token: string) {
    await this.propertyHistoryGateway.updatePropertyHistory(input, token);
    return HttpAdapter.updated("Histórico atualizado com sucesso!");
  }
}

export { UpdatePropertyHistoryUseCase };

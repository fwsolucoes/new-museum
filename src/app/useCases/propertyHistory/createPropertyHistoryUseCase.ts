import type { PropertyHistoryGatewayDTO } from "~/domain/gateways/propertyHistory";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";

type InputProps = {
  propertyId: string;
  name: string;
  description?: string;
  statusId: string;
  occurredAt: Date;
};

class CreatePropertyHistoryUseCase {
  constructor(private propertyHistoryGateway: PropertyHistoryGatewayDTO) {}

  async execute(input: InputProps, token: string) {
    await this.propertyHistoryGateway.createPropertyHistory(input, token);
    return HttpAdapter.created("Histórico criado com sucesso!");
  }
}

export { CreatePropertyHistoryUseCase };

import type { PropertyGatewayDTO } from "~/domain/gateways/property";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";

class DeletePropertyUseCase {
  constructor(private propertyGateway: PropertyGatewayDTO) {}

  async execute(propertyId: string, token: string) {
    await this.propertyGateway.deleteProperty(propertyId, token);
    return HttpAdapter.success("Imóvel deletado com sucesso!");
  }
}

export { DeletePropertyUseCase };

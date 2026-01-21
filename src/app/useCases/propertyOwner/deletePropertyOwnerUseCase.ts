import type { PropertyOwnerGatewayDTO } from "~/domain/gateways/propertyOwner";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";

class DeletePropertyOwnerUseCase {
  constructor(private propertyOwnerGateway: PropertyOwnerGatewayDTO) {}

  async execute(propertyOwnerId: string, token: string) {
    await this.propertyOwnerGateway.deletePropertyOwner(propertyOwnerId, token);
    return HttpAdapter.success("Proprietário deletado com sucesso!");
  }
}

export { DeletePropertyOwnerUseCase };

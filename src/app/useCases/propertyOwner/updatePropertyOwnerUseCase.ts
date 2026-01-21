import type { PropertyOwnerGatewayDTO } from "~/domain/gateways/propertyOwner";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";

type InputProps = {
  id: string;
  legalName: string;
  taxIdentifierKind: "pf" | "pj";
  taxIdentifierValue: string;
  status: "active" | "inactive";
  reference: string;
  walletId: string;
  tradeName: string;
};

class UpdatePropertyOwnerUseCase {
  constructor(private propertyOwnerGateway: PropertyOwnerGatewayDTO) {}

  async execute(input: InputProps, token: string) {
    await this.propertyOwnerGateway.updatePropertyOwner(input, token);
    return HttpAdapter.updated("Proprietário atualizado com sucesso!");
  }
}

export { UpdatePropertyOwnerUseCase };

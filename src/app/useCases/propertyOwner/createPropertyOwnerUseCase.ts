import type { PropertyOwnerGatewayDTO } from "~/domain/gateways/propertyOwner";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";

type InputProps = {
  legalName: string;
  taxIdentifierKind: "pf" | "pj";
  taxIdentifierValue: string;
  status: "active" | "inactive";
  reference: string;
  walletId: string;
  tradeName: string;
};

class CreatePropertyOwnerUseCase {
  constructor(private propertyOwnerGateway: PropertyOwnerGatewayDTO) {}

  async execute(input: InputProps, token: string) {
    await this.propertyOwnerGateway.createPropertyOwner(input, token);
    return HttpAdapter.created("Proprietário criado com sucesso!");
  }
}

export { CreatePropertyOwnerUseCase };

import type { PropertyDocumentGatewayDTO } from "~/domain/gateways/propertyDocument";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";

type InputProps = {
  propertyId: string;
  name: string;
  description?: string;
  file: string;
};

class CreatePropertyDocumentUseCase {
  constructor(private propertyDocumentGateway: PropertyDocumentGatewayDTO) {}

  async execute(input: InputProps, token: string) {
    await this.propertyDocumentGateway.createPropertyDocument(input, token);
    return HttpAdapter.created("Documento criado com sucesso!");
  }
}

export { CreatePropertyDocumentUseCase };

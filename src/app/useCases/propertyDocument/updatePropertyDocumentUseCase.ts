import type { PropertyDocumentGatewayDTO } from "~/domain/gateways/propertyDocument";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";

type InputProps = {
  id: string;
  name: string;
  description?: string;
  file: string;
};

class UpdatePropertyDocumentUseCase {
  constructor(private propertyDocumentGateway: PropertyDocumentGatewayDTO) {}

  async execute(input: InputProps, token: string) {
    await this.propertyDocumentGateway.updatePropertyDocument(input, token);
    return HttpAdapter.updated("Documento atualizado com sucesso!");
  }
}

export { UpdatePropertyDocumentUseCase };

import type { PropertyDocumentGatewayDTO } from "~/domain/gateways/propertyDocument";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";

class DeletePropertyDocumentUseCase {
  constructor(private propertyDocumentGateway: PropertyDocumentGatewayDTO) {}

  async execute(propertyDocumentId: string, token: string) {
    await this.propertyDocumentGateway.deletePropertyDocument(
      propertyDocumentId,
      token
    );

    return HttpAdapter.success("Documento deletado com sucesso!");
  }
}

export { DeletePropertyDocumentUseCase };

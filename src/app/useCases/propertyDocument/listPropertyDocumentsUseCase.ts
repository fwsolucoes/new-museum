import { PropertyDocumentSearchParams } from "~/app/search/propertyDocumentSearchParams";
import type { PropertyDocumentGatewayDTO } from "~/domain/gateways/propertyDocument";

type InputProps = {
  page?: number | null;
  filter: {
    propertyId: string;
  };
};

class ListPropertyDocumentsUseCase {
  constructor(private propertyDocumentGateway: PropertyDocumentGatewayDTO) {}

  async execute(input: InputProps, token: string) {
    const { page, filter } = input;
    const searchParams = new PropertyDocumentSearchParams({ page, filter });

    const propertyDocuments =
      await this.propertyDocumentGateway.listPropertyDocuments(
        searchParams,
        token
      );

    return propertyDocuments.toJson();
  }
}

export { ListPropertyDocumentsUseCase };

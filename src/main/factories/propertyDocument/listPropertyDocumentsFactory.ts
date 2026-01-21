import { ListPropertyDocumentsUseCase } from "~/app/useCases/propertyDocument/listPropertyDocumentsUseCase";
import { ListPropertyDocumentsController } from "~/infra/controllers/propertyDocument/listPropertyDocumentsController";
import { PropertyDocumentGateway } from "~/infra/gateways/propertyDocument";

const propertyDocumentGateway = new PropertyDocumentGateway();
const listPropertyDocumentsUseCase = new ListPropertyDocumentsUseCase(
  propertyDocumentGateway
);
const listPropertyDocumentsController = new ListPropertyDocumentsController(
  listPropertyDocumentsUseCase
);

const listPropertyDocuments = {
  handle: listPropertyDocumentsController.handle.bind(
    listPropertyDocumentsController
  ),
};

export { listPropertyDocuments };

import { DeletePropertyDocumentUseCase } from "~/app/useCases/propertyDocument/deletePropertyDocumentUseCase";
import { DeletePropertyDocumentController } from "~/infra/controllers/propertyDocument/deletePropertyDocumentController";
import { PropertyDocumentGateway } from "~/infra/gateways/propertyDocument";

const propertyDocumentGateway = new PropertyDocumentGateway();
const deletePropertyDocumentUseCase = new DeletePropertyDocumentUseCase(
  propertyDocumentGateway
);
const deletePropertyDocumentController = new DeletePropertyDocumentController(
  deletePropertyDocumentUseCase
);

const deletePropertyDocument = {
  handle: deletePropertyDocumentController.handle.bind(
    deletePropertyDocumentController
  ),
};

export { deletePropertyDocument };

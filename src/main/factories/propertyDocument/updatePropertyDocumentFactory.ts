import { UpdatePropertyDocumentUseCase } from "~/app/useCases/propertyDocument/updatePropertyDocumentUseCase";
import { UpdatePropertyDocumentController } from "~/infra/controllers/propertyDocument/updatePropertyDocumentController";
import { PropertyDocumentGateway } from "~/infra/gateways/propertyDocument";

const propertyDocumentGateway = new PropertyDocumentGateway();
const updatePropertyDocumentUseCase = new UpdatePropertyDocumentUseCase(
  propertyDocumentGateway
);
const updatePropertyDocumentController = new UpdatePropertyDocumentController(
  updatePropertyDocumentUseCase
);

const updatePropertyDocument = {
  handle: updatePropertyDocumentController.handle.bind(
    updatePropertyDocumentController
  ),
};

export { updatePropertyDocument };

import { CreatePropertyDocumentUseCase } from "~/app/useCases/propertyDocument/createPropertyDocumentUseCase";
import { CreatePropertyDocumentController } from "~/infra/controllers/propertyDocument/createPropertyDocumentController";
import { PropertyDocumentGateway } from "~/infra/gateways/propertyDocument";

const propertyDocumentGateway = new PropertyDocumentGateway();
const createPropertyDocumentUseCase = new CreatePropertyDocumentUseCase(
  propertyDocumentGateway
);
const createPropertyDocumentController = new CreatePropertyDocumentController(
  createPropertyDocumentUseCase
);

const createPropertyDocument = {
  handle: createPropertyDocumentController.handle.bind(
    createPropertyDocumentController
  ),
};

export { createPropertyDocument };

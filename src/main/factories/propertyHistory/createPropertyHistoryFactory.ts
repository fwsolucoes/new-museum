import { CreatePropertyHistoryUseCase } from "~/app/useCases/propertyHistory/createPropertyHistoryUseCase";
import { CreatePropertyHistoryController } from "~/infra/controllers/propertyHistory/createPropertyHistoryController";
import { PropertyHistoryGateway } from "~/infra/gateways/propertyHistory";

const propertyHistoryGateway = new PropertyHistoryGateway();
const createPropertyHistoryUseCase = new CreatePropertyHistoryUseCase(
  propertyHistoryGateway
);
const createPropertyHistoryController = new CreatePropertyHistoryController(
  createPropertyHistoryUseCase
);

const createPropertyHistory = {
  handle: createPropertyHistoryController.handle.bind(
    createPropertyHistoryController
  ),
};

export { createPropertyHistory };

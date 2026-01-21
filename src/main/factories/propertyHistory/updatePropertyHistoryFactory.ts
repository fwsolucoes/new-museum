import { UpdatePropertyHistoryUseCase } from "~/app/useCases/propertyHistory/updatePropertyHistoryUseCase";
import { UpdatePropertyHistoryController } from "~/infra/controllers/propertyHistory/updatePropertyHistoryController";
import { PropertyHistoryGateway } from "~/infra/gateways/propertyHistory";

const propertyHistoryGateway = new PropertyHistoryGateway();
const updatePropertyHistoryUseCase = new UpdatePropertyHistoryUseCase(
  propertyHistoryGateway
);
const updatePropertyHistoryController = new UpdatePropertyHistoryController(
  updatePropertyHistoryUseCase
);

const updatePropertyHistory = {
  handle: updatePropertyHistoryController.handle.bind(
    updatePropertyHistoryController
  ),
};

export { updatePropertyHistory };

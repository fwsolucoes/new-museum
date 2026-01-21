import { DeletePropertyHistoryUseCase } from "~/app/useCases/propertyHistory/deletePropertyHistoryUseCase";
import { DeletePropertyHistoryController } from "~/infra/controllers/propertyHistory/deletePropertyHistoryController";
import { PropertyHistoryGateway } from "~/infra/gateways/propertyHistory";

const propertyHistoryGateway = new PropertyHistoryGateway();
const deletePropertyHistoryUseCase = new DeletePropertyHistoryUseCase(
  propertyHistoryGateway
);
const deletePropertyHistoryController = new DeletePropertyHistoryController(
  deletePropertyHistoryUseCase
);

const deletePropertyHistory = {
  handle: deletePropertyHistoryController.handle.bind(
    deletePropertyHistoryController
  ),
};

export { deletePropertyHistory };

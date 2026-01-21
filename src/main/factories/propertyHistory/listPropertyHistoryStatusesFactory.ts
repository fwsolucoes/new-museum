import { ListPropertyHistoryStatusesUseCase } from "~/app/useCases/propertyHistory/listPropertyHistoryStatusesUseCase";
import { ListPropertyHistoryStatusesController } from "~/infra/controllers/propertyHistory/listPropertyHistoryStatusesController";
import { PropertyHistoryGateway } from "~/infra/gateways/propertyHistory";

const propertyHistoryGateway = new PropertyHistoryGateway();
const listPropertyHistoryStatusesUseCase =
  new ListPropertyHistoryStatusesUseCase(propertyHistoryGateway);
const listPropertyHistoryStatusesController =
  new ListPropertyHistoryStatusesController(listPropertyHistoryStatusesUseCase);

const listPropertyHistoryStatuses = {
  handle: listPropertyHistoryStatusesController.handle.bind(
    listPropertyHistoryStatusesController
  ),
};

export { listPropertyHistoryStatuses };

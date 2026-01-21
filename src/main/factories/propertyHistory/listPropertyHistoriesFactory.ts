import { ListPropertyHistoriesUseCase } from "~/app/useCases/propertyHistory/listPropertyHistoriesUseCase";
import { ListPropertyHistoriesController } from "~/infra/controllers/propertyHistory/listPropertyHistoriesController";
import { PropertyHistoryGateway } from "~/infra/gateways/propertyHistory";

const propertyHistoryGateway = new PropertyHistoryGateway();
const listPropertyHistoriesUseCase = new ListPropertyHistoriesUseCase(
  propertyHistoryGateway
);
const listPropertyHistoriesController = new ListPropertyHistoriesController(
  listPropertyHistoriesUseCase
);

const listPropertyHistories = {
  handle: listPropertyHistoriesController.handle.bind(
    listPropertyHistoriesController
  ),
};

export { listPropertyHistories };

import { ListItemsUseCase } from "~/app/useCases/items/listItemsUseCase";
import { ListItemsController } from "~/infra/controllers/item/listItemsController";
import { ItemGateway } from "~/infra/gateways/item";

const itemGateway = new ItemGateway();
const listItemsUseCase = new ListItemsUseCase(itemGateway);
const listItemsController = new ListItemsController(listItemsUseCase);

const listItems = {
  handle: listItemsController.handle.bind(listItemsController),
};

export { listItems };

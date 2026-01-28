import { CreateItemUseCase } from "~/app/useCases/items/createItemUseCase";
import { CreateItemController } from "~/infra/controllers/item/createItemController";
import { ItemGateway } from "~/infra/gateways/item";

const itemGateway = new ItemGateway();
const createItemUseCase = new CreateItemUseCase(itemGateway);
const createItemController = new CreateItemController(createItemUseCase);

const createItem = {
  handle: createItemController.handle.bind(createItemController),
};

export { createItem };

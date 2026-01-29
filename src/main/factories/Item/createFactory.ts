import { CreateUseCase } from "~/app/useCases/items/createUseCase";
import { CreateController } from "~/infra/controllers/item/createController";
import { ItemGateway } from "~/infra/gateways/item";

const itemGateway = new ItemGateway();
const createUseCase = new CreateUseCase(itemGateway);
const createController = new CreateController(createUseCase);

const createItem = {
  handle: createController.handle.bind(createController),
};

export { createItem };

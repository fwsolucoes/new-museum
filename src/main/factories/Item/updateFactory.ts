import { UpdateUseCase } from "~/app/useCases/items/updateUseCase";
import { UpdateController } from "~/infra/controllers/item/updateController";
import { ItemGateway } from "~/infra/gateways/item";

const itemGateway = new ItemGateway();
const updateUseCase = new UpdateUseCase(itemGateway);
const updateController = new UpdateController(updateUseCase);

const updateItem = {
  handle: updateController.handle.bind(updateController),
};

export { updateItem };

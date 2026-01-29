import { DeleteUseCase } from "~/app/useCases/items/deleteUseCase";
import { DeleteController } from "~/infra/controllers/item/deleteController";
import { ItemGateway } from "~/infra/gateways/item";

const itemGateway = new ItemGateway();
const deleteUseCase = new DeleteUseCase(itemGateway);
const deleteController = new DeleteController(deleteUseCase);

const deleteItem = {
  handle: deleteController.handle.bind(deleteController),
};

export { deleteItem };

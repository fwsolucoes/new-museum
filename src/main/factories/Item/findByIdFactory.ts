import { FindByIdUseCase } from "~/app/useCases/items/findByIdUseCase";
import { FindByIdController } from "~/infra/controllers/item/findByIdController";
import { ItemGateway } from "~/infra/gateways/item";

const itemGateway = new ItemGateway();
const findByIdUseCase = new FindByIdUseCase(itemGateway);
const findByIdController = new FindByIdController(findByIdUseCase);

const findById = {
  handle: findByIdController.handle.bind(findByIdController),
};

export { findById };

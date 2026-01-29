import { FindAllByAccountIdUseCase } from "~/app/useCases/items/findAllByAccountIdUseCase";
import { FindAllByAccountIdController } from "~/infra/controllers/item/findAllByAccountIdController";
import { ItemGateway } from "~/infra/gateways/item";

const itemGateway = new ItemGateway();
const findAllByAccountIdUseCase = new FindAllByAccountIdUseCase(itemGateway);
const findAllByAccountIdController = new FindAllByAccountIdController(
  findAllByAccountIdUseCase,
);

const findAllByAccountId = {
  handle: findAllByAccountIdController.handle.bind(
    findAllByAccountIdController,
  ),
};

export { findAllByAccountId };

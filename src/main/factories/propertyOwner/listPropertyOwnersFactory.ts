import { ListPropertyOwnersUseCase } from "~/app/useCases/propertyOwner/listPropertyOwnersUseCase";
import { ListPropertyOwnersController } from "~/infra/controllers/propertyOwner/listPropertyOwnersController";
import { PropertyOwnerGateway } from "~/infra/gateways/propertyOwner";

const propertyOwnerGateway = new PropertyOwnerGateway();
const listPropertyOwnersUseCase = new ListPropertyOwnersUseCase(
  propertyOwnerGateway
);
const listPropertyOwnersController = new ListPropertyOwnersController(
  listPropertyOwnersUseCase
);

const listPropertyOwners = {
  handle: listPropertyOwnersController.handle.bind(
    listPropertyOwnersController
  ),
};

export { listPropertyOwners };

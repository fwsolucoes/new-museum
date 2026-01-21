import { DeletePropertyOwnerUseCase } from "~/app/useCases/propertyOwner/deletePropertyOwnerUseCase";
import { DeletePropertyOwnerController } from "~/infra/controllers/propertyOwner/deletePropertyOwnerController";
import { PropertyOwnerGateway } from "~/infra/gateways/propertyOwner";

const propertyOwnerGateway = new PropertyOwnerGateway();
const deletePropertyOwnerUseCase = new DeletePropertyOwnerUseCase(
  propertyOwnerGateway
);
const deletePropertyOwnerController = new DeletePropertyOwnerController(
  deletePropertyOwnerUseCase
);

const deletePropertyOwner = {
  handle: deletePropertyOwnerController.handle.bind(
    deletePropertyOwnerController
  ),
};

export { deletePropertyOwner };

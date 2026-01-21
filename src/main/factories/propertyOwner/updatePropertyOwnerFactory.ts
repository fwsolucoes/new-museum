import { UpdatePropertyOwnerUseCase } from "~/app/useCases/propertyOwner/updatePropertyOwnerUseCase";
import { UpdatePropertyOwnerController } from "~/infra/controllers/propertyOwner/updatePropertyOwnerController";
import { PropertyOwnerGateway } from "~/infra/gateways/propertyOwner";

const propertyOwnerGateway = new PropertyOwnerGateway();
const updatePropertyOwnerUseCase = new UpdatePropertyOwnerUseCase(
  propertyOwnerGateway
);
const updatePropertyOwnerController = new UpdatePropertyOwnerController(
  updatePropertyOwnerUseCase
);

const updatePropertyOwner = {
  handle: updatePropertyOwnerController.handle.bind(
    updatePropertyOwnerController
  ),
};

export { updatePropertyOwner };

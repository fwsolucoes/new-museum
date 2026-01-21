import { CreatePropertyOwnerUseCase } from "~/app/useCases/propertyOwner/createPropertyOwnerUseCase";
import { CreatePropertyOwnerController } from "~/infra/controllers/propertyOwner/createPropertyOwnerController";
import { PropertyOwnerGateway } from "~/infra/gateways/propertyOwner";

const propertyOwnerGateway = new PropertyOwnerGateway();
const createPropertyOwnerUseCase = new CreatePropertyOwnerUseCase(
  propertyOwnerGateway
);
const createPropertyOwnerController = new CreatePropertyOwnerController(
  createPropertyOwnerUseCase
);

const createPropertyOwner = {
  handle: createPropertyOwnerController.handle.bind(
    createPropertyOwnerController
  ),
};

export { createPropertyOwner };

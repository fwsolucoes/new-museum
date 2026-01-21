import { UpdatePropertyUseCase } from "~/app/useCases/property/updatePropertyUseCase";
import { UpdatePropertyController } from "~/infra/controllers/property/updatePropertyController";
import { PropertyGateway } from "~/infra/gateways/property";

const propertyGateway = new PropertyGateway();
const updatePropertyUseCase = new UpdatePropertyUseCase(propertyGateway);
const updatePropertyController = new UpdatePropertyController(
  updatePropertyUseCase
);

const updateProperty = {
  handle: updatePropertyController.handle.bind(updatePropertyController),
};

export { updateProperty };

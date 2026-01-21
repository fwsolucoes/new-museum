import { CreatePropertyUseCase } from "~/app/useCases/property/createPropertyUseCase";
import { CreatePropertyController } from "~/infra/controllers/property/createPropertyController";
import { PropertyGateway } from "~/infra/gateways/property";

const propertyGateway = new PropertyGateway();
const createPropertyUseCase = new CreatePropertyUseCase(propertyGateway);
const createPropertyController = new CreatePropertyController(
  createPropertyUseCase
);

const createProperty = {
  handle: createPropertyController.handle.bind(createPropertyController),
};

export { createProperty };

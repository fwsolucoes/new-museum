import { DeletePropertyUseCase } from "~/app/useCases/property/deletePropertyUseCase";
import { DeletePropertyController } from "~/infra/controllers/property/deletePropertyController";
import { PropertyGateway } from "~/infra/gateways/property";

const propertyGateway = new PropertyGateway();
const deletePropertyUseCase = new DeletePropertyUseCase(propertyGateway);
const deletePropertyController = new DeletePropertyController(
  deletePropertyUseCase
);

const deleteProperty = {
  handle: deletePropertyController.handle.bind(deletePropertyController),
};

export { deleteProperty };

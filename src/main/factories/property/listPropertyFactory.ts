import { ListPropertyUseCase } from "~/app/useCases/property/listPropertyUseCase";
import { ListPropertyController } from "~/infra/controllers/property/listPropertyController";
import { PropertyGateway } from "~/infra/gateways/property";

const propertyGateway = new PropertyGateway();
const listPropertyUseCase = new ListPropertyUseCase(propertyGateway);
const listPropertyController = new ListPropertyController(listPropertyUseCase);

const listProperty = {
  handle: listPropertyController.handle.bind(listPropertyController),
};

export { listProperty };

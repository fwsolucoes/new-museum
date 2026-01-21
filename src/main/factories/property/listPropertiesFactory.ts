import { ListPropertiesUseCase } from "~/app/useCases/property/listPropertiesUseCase";
import { ListPropertiesController } from "~/infra/controllers/property/listPropertiesController";
import { PropertyGateway } from "~/infra/gateways/property";

const propertyGateway = new PropertyGateway();
const listPropertiesUseCase = new ListPropertiesUseCase(propertyGateway);
const listPropertiesController = new ListPropertiesController(
  listPropertiesUseCase
);

const listProperties = {
  handle: listPropertiesController.handle.bind(listPropertiesController),
};

export { listProperties };

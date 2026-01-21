import { ListPropertyMapViewUseCase } from "~/app/useCases/property/listPropertyMapViewUseCase";
import { ListPropertyMapViewController } from "~/infra/controllers/property/listPropertyMapViewController";
import { PropertyGateway } from "~/infra/gateways/property";

const propertyGateway = new PropertyGateway();

const listPropertyMapViewUseCase = new ListPropertyMapViewUseCase(
  propertyGateway
);

const listPropertyMapViewController = new ListPropertyMapViewController(
  listPropertyMapViewUseCase
);

const listPropertyMapView = {
  handle: listPropertyMapViewController.handle.bind(
    listPropertyMapViewController
  ),
};

export { listPropertyMapView };

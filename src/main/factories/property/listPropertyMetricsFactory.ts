import { ListPropertyMetricsUseCase } from "~/app/useCases/property/listPropertyMetricsUseCase";
import { ListPropertyMetricsController } from "~/infra/controllers/property/listPropertyMetricsController";
import { PropertyGateway } from "~/infra/gateways/property";

const propertyGateway = new PropertyGateway();

const listPropertyMetricsUseCase = new ListPropertyMetricsUseCase(
  propertyGateway
);

const listPropertyMetricsController = new ListPropertyMetricsController(
  listPropertyMetricsUseCase
);

const listPropertyMetrics = {
  handle: listPropertyMetricsController.handle.bind(
    listPropertyMetricsController
  ),
};

export { listPropertyMetrics };

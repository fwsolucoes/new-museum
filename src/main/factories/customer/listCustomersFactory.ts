import { ListCustomersUseCase } from "~/app/useCases/customer/listCustomersUseCase";
import { ListCustomersController } from "~/infra/controllers/customer/listCustomersController";
import { CustomerGateway } from "~/infra/gateways/customer";

const customerGateway = new CustomerGateway();
const listCustomersUseCase = new ListCustomersUseCase(customerGateway);
const listCustomersController = new ListCustomersController(
  listCustomersUseCase
);

const listCustomers = {
  handle: listCustomersController.handle.bind(listCustomersController),
};

export { listCustomers };

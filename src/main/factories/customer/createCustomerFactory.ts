import { CreateCustomerUseCase } from "~/app/useCases/customer/createCustomerUseCase";
import { CreateCustomerController } from "~/infra/controllers/customer/createCustomerController";
import { CustomerGateway } from "~/infra/gateways/customer";

const customerGateway = new CustomerGateway();
const createCustomerUseCase = new CreateCustomerUseCase(customerGateway);
const createCustomerController = new CreateCustomerController(
  createCustomerUseCase
);

const createCustomer = {
  handle: createCustomerController.handle.bind(createCustomerController),
};

export { createCustomer };

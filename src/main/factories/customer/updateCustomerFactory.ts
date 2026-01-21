import { UpdateCustomerUseCase } from "~/app/useCases/customer/updateCustomerUseCase";
import { UpdateCustomerController } from "~/infra/controllers/customer/updateCustomerController";
import { CustomerGateway } from "~/infra/gateways/customer";

const customerGateway = new CustomerGateway();
const updateCustomerUseCase = new UpdateCustomerUseCase(customerGateway);
const updateCustomerController = new UpdateCustomerController(
  updateCustomerUseCase
);

const updateCustomer = {
  handle: updateCustomerController.handle.bind(updateCustomerController),
};

export { updateCustomer };

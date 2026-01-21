import { DeleteCustomerUseCase } from "~/app/useCases/customer/deleteCustomerUseCase";
import { DeleteCustomerController } from "~/infra/controllers/customer/deleteCustomerController";
import { CustomerGateway } from "~/infra/gateways/customer";

const customerGateway = new CustomerGateway();
const deleteCustomerUseCase = new DeleteCustomerUseCase(customerGateway);
const deleteCustomerController = new DeleteCustomerController(
  deleteCustomerUseCase
);

const deleteCustomer = {
  handle: deleteCustomerController.handle.bind(deleteCustomerController),
};

export { deleteCustomer };

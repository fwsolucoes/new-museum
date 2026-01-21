import { SignCustomerUseCase } from "~/app/useCases/customer/signCustomerUseCase";
import { SignCustomerController } from "~/infra/controllers/customer/signCustomerController";
import { CustomerGateway } from "~/infra/gateways/customer";

const customerGateway = new CustomerGateway();
const signCustomerUseCase = new SignCustomerUseCase(customerGateway);
const signCustomerController = new SignCustomerController(signCustomerUseCase);

const signCustomer = {
  handle: signCustomerController.handle.bind(signCustomerController),
};

export { signCustomer };

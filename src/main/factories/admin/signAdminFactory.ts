import { SignAdminUseCase } from "~/app/useCases/admin/signAdminUseCase";
import { SignAdminController } from "~/infra/controllers/admin/signAdminController";
import { AdminGateway } from "~/infra/gateways/admin";

const adminGateway = new AdminGateway();
const signAdminUseCase = new SignAdminUseCase(adminGateway);
const signAdminController = new SignAdminController(signAdminUseCase);

const signAdmin = {
  handle: signAdminController.handle.bind(signAdminController),
};

export { signAdmin };

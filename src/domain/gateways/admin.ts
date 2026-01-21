import type { Admin } from "../entities/admin";

type SignAdminProps = {
  email: string;
  password: string;
};

type AdminGatewayDTO = {
  signAdmin: (input: SignAdminProps) => Promise<[Admin, string]>;
  forgotPasswordToken: (email: string) => Promise<void>;
  changePasswordByToken: (token: string, newPassword: string) => Promise<void>;
  validateForgotPasswordToken: (token: string) => Promise<void>;
};

export type { AdminGatewayDTO, SignAdminProps };

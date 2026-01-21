import type { User } from "../entities/user";

type SignUserProps = {
  email: string;
  password: string;
};

type UserGatewayDTO = {
  signUser: (input: SignUserProps) => Promise<[User, string]>;
  forgotPasswordToken: (email: string) => Promise<void>;
  changePasswordByToken: (token: string, newPassword: string) => Promise<void>;
  validateForgotPasswordToken: (token: string) => Promise<void>;
};

export type { UserGatewayDTO, SignUserProps };

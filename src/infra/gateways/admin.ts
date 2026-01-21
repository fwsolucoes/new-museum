import type { Admin } from "~/domain/entities/admin";
import type { SignAdminProps, AdminGatewayDTO } from "~/domain/gateways/admin";
import { HttpAdapter } from "../adapters/httpAdapter";
import { SchemaValidatorAdapter } from "../adapters/schemaValidatorAdapter";
import { api } from "../http/api";
import { AdminMapper } from "../mappers/admin";
import {
  externalTokenSchema,
  externalAdminSchema,
} from "../schemas/external/admin";
import { JwtAdapter } from "../adapters/jwtAdapter";

class AdminGateway implements AdminGatewayDTO {
  async signAdmin(admin: SignAdminProps): Promise<[Admin, string]> {
    const apiResponse = await api.post("/users/login", { body: admin });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);

    const tokenValidator = new SchemaValidatorAdapter(externalTokenSchema);
    const token = tokenValidator.validate(apiResponse.response);

    const decoded = JwtAdapter.decode(token.jwt);
    const schemaValidator = new SchemaValidatorAdapter(externalAdminSchema);
    const validatedExternalData = schemaValidator.validate({
      ...decoded,
      id: decoded.sub,
    });

    return [AdminMapper.toEntity(validatedExternalData), token.jwt] as const;
  }

  async forgotPasswordToken(email: string): Promise<void> {
    const url = `/forgot-password-token/email/${email}`;
    const apiResponse = await api.post(url);
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }

  async changePasswordByToken(token: string, password: string): Promise<void> {
    const url = `/change-password-by-token/token/${token}`;
    const apiResponse = await api.post(url, { body: { password } });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }

  async validateForgotPasswordToken(token: string): Promise<void> {
    const url = `/validate-forgot-password-token/token/${token}`;
    const apiResponse = await api.post(url);
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }
}

export { AdminGateway };

import type { User } from "~/domain/entities/user";
import type { SignUserProps, UserGatewayDTO } from "~/domain/gateways/user";
import { HttpAdapter } from "../adapters/httpAdapter";
import { SchemaValidatorAdapter } from "../adapters/schemaValidatorAdapter";
import { api } from "../http/api";
import { UserMapper } from "../mappers/user";
import { externalUserSchema } from "../schemas/external/user";
import { environmentVariables as env } from "~/main/config/environmentVariables";

class UserGateway implements UserGatewayDTO {
  async signUser(user: SignUserProps): Promise<[User, string]> {
    const apiResponse = await api.post(`/${env.API_DATABASE}/login`, {
      body: user,
    });
    console.log("apiResponse", apiResponse);
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);

    const schemaValidator = new SchemaValidatorAdapter(externalUserSchema);
    const validatedExternalData = schemaValidator.validate(
      apiResponse.response,
    );

    return [
      UserMapper.toEntity(validatedExternalData),
      validatedExternalData.token.accessToken,
    ] as const;
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

export { UserGateway };

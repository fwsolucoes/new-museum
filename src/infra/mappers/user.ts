import { User } from "~/domain/entities/user";
import type { ExternalUser } from "../schemas/external/user";

class UserMapper {
  static toEntity(externalUser: ExternalUser) {
    const defaultAvatar = `https://ui-avatars.com/api/?name=${externalUser.user.name}`;

    return User.restore({
      id: externalUser.user.id,
      name: externalUser.user.name,
      email: externalUser.user.email,
      avatar: defaultAvatar,
      accountId: externalUser.user.accounts[0]?.id,
    });
  }
}

export { UserMapper };

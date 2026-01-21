import { Admin } from "~/domain/entities/admin";
import type { ExternalAdmin } from "../schemas/external/admin";

class AdminMapper {
  static toEntity(externalAdmin: ExternalAdmin) {
    const defaultAvatar = `https://ui-avatars.com/api/?name=${externalAdmin.name}`;

    return Admin.restore({
      id: externalAdmin.id,
      name: externalAdmin.name,
      email: externalAdmin.email,
      avatar: defaultAvatar,
    });
  }
}

export { AdminMapper };

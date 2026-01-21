import { Customer } from "~/domain/entities/customer";
import type { ExternalCustomer } from "../schemas/external/customer";

class CustomerMapper {
  static toEntity(externalCustomer: ExternalCustomer) {
    const defaultAvatar = `https://ui-avatars.com/api/?name=${externalCustomer.name}`;

    return Customer.restore({
      id: externalCustomer.id,
      name: externalCustomer.name,
      email: externalCustomer.email,
      avatar: defaultAvatar,
      status: externalCustomer.status === "ACTIVE" ? "active" : "inactive",
      walletId: externalCustomer.walletId,
      createdAt: new Date(externalCustomer.createdAt),
      updatedAt: new Date(externalCustomer.updatedAt),
    });
  }
}

export { CustomerMapper };

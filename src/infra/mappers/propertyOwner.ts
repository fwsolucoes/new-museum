import { PropertyOwner } from "~/domain/entities/propertyOwner";
import type { ExternalPropertyOwner } from "../schemas/external/propertyOwner";

class PropertyOwnerMapper {
  static toEntity(externalPropertyOwner: ExternalPropertyOwner) {
    return PropertyOwner.restore({
      id: externalPropertyOwner.id,
      walletId: externalPropertyOwner.walletId,
      reference: externalPropertyOwner.reference,
      tradeName: externalPropertyOwner.tradeName,
      legalName: externalPropertyOwner.legalName,
      taxIdentifierValue: externalPropertyOwner.taxIdentifierValue,
      taxIdentifierKind:
        externalPropertyOwner.taxIdentifierKind === "PF" ? "pf" : "pj",
      propertiesCount: externalPropertyOwner.propertiesCount,
      status: externalPropertyOwner.status === "ACTIVE" ? "active" : "inactive",
    });
  }
}

export { PropertyOwnerMapper };

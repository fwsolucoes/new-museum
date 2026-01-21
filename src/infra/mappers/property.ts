import {
  Property,
  type PropertyContractProps,
} from "~/domain/entities/property";
import type { ExternalProperty } from "../schemas/external/property";

class PropertyMapper {
  static toEntity(externalProperty: ExternalProperty) {
    function hasContract(): PropertyContractProps | null {
      if (
        externalProperty.contractReference &&
        externalProperty.contractStartDate &&
        externalProperty.contractEndDate &&
        externalProperty.contractReviewDate &&
        externalProperty.contractAdjustmentIndex &&
        externalProperty.contractGuarantee !== undefined &&
        externalProperty.contractFireInsurance !== undefined
      ) {
        return {
          reference: externalProperty.contractReference,
          startDate: new Date(externalProperty.contractStartDate),
          endDate: new Date(externalProperty.contractEndDate),
          reviewDate: new Date(externalProperty.contractReviewDate),
          adjustmentIndex: externalProperty.contractAdjustmentIndex,
          guarantee: externalProperty.contractGuarantee || "-",
          fireInsurance: !!externalProperty.contractFireInsurance,
        };
      }
      return null;
    }

    function makeStatus() {
      switch (externalProperty.consolidatedStatus) {
        case "AVAILABLE":
          return "available";
        case "RENTED_NORMAL":
          return "rentedNormal";
        case "RENTED_LEGAL":
          return "rentedLegal";
        case "RENTED_VACANT":
          return "rentedVacant";
        case "RENTED_CLAIM":
          return "rentedClaim";
        case "UNDER_REGULARIZATION":
          return "underRegularization";
        case "SOLD":
          return "sold";
      }
    }

    return Property.restore({
      propertyOwnerId: externalProperty.propertyOwnerId,
      id: externalProperty.id,
      image: externalProperty.images,
      name: externalProperty.name,
      description: externalProperty.description,
      street: externalProperty.street,
      streetNumber: externalProperty.number,
      complement: externalProperty.complement,
      neighborhood: externalProperty.neighborhood,
      city: externalProperty.city,
      state: externalProperty.state,
      postalCode: externalProperty.postalCode,
      registration: externalProperty.registration,
      externalReference: externalProperty.externalReference,
      number: externalProperty.number,
      contract: hasContract(),
      latitude: externalProperty.latitude,
      longitude: externalProperty.longitude,
      status: makeStatus(),
    });
  }
}

export { PropertyMapper };

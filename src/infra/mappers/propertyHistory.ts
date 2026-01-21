import { PropertyHistory } from "~/domain/entities/propertyHistory";
import type { ExternalPropertyHistory } from "../schemas/external/propertyHistory";

class PropertyHistoryMapper {
  static toEntity(externalPropertyHistory: ExternalPropertyHistory) {
    return PropertyHistory.restore({
      id: externalPropertyHistory.id,
      name: externalPropertyHistory.name,
      description: externalPropertyHistory.description,
      statusId: externalPropertyHistory.statusId,
      propertyId: externalPropertyHistory.propertyId,
      occurredAt: new Date(externalPropertyHistory.occurredAt),
      createdAt: new Date(externalPropertyHistory.createdAt),
      updatedAt: new Date(externalPropertyHistory.updatedAt),
    });
  }
}

export { PropertyHistoryMapper };

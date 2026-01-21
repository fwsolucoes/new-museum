import { PropertyDocument } from "~/domain/entities/propertyDocument";
import type { ExternalPropertyDocument } from "../schemas/external/propertyDocument";

class PropertyDocumentMapper {
  static toEntity(externalPropertyDocument: ExternalPropertyDocument) {
    return PropertyDocument.restore({
      id: externalPropertyDocument.id,
      name: externalPropertyDocument.name,
      description: externalPropertyDocument.description,
      file: externalPropertyDocument.file,
      propertyId: externalPropertyDocument.propertyId,
      createdAt: new Date(externalPropertyDocument.createdAt),
      updatedAt: new Date(externalPropertyDocument.updatedAt),
    });
  }
}

export { PropertyDocumentMapper };

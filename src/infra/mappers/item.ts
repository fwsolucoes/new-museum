import { Item } from "~/domain/entities/item";
import type { ExternalItem } from "../schemas/external/item";

class ItemMapper {
  static toEntity(externalItem: ExternalItem) {
    return Item.restore({
      accountId: externalItem.account_id,
      id: externalItem.id,
      type: externalItem.type,
      code: externalItem.code,
      name: externalItem.name,
      description: externalItem.description || "",
      image: externalItem.image || "",
      audio: externalItem.audio || "",
      createdAt: externalItem.created_at,
    });
  }
}

export { ItemMapper };

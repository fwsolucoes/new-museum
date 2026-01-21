import { z } from "zod";
import { externalPaginationSchema } from "./pagination";

type ExternalPropertyOwner = z.infer<typeof externalPropertyOwnerSchema>;

const externalPropertyOwnerSchema = z.strictObject({
  id: z.uuidv7(),
  reference: z.string(),
  walletId: z.uuidv7(),
  taxIdentifierKind: z.enum(["PF", "PJ"]),
  taxIdentifierValue: z.string(),
  status: z.enum(["ACTIVE", "INACTIVE"]),
  propertiesCount: z.number(),
  legalName: z.string(),
  tradeName: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.null(),
});

const externalPropertyOwnersSchema = externalPaginationSchema.extend({
  items: externalPropertyOwnerSchema.array(),
});

export { externalPropertyOwnersSchema, type ExternalPropertyOwner };

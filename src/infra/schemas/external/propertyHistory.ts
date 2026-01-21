import { z } from "zod";
import { externalPaginationSchema } from "./pagination";

type ExternalPropertyHistory = z.infer<typeof externalPropertyHistorySchema>;

const externalPropertyHistorySchema = z.strictObject({
  id: z.uuidv7(),
  propertyId: z.uuidv7(),
  name: z.string(),
  description: z.string(),
  statusId: z.string(),
  occurredAt: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.null(),
});

const externalPropertyHistoriesSchema = externalPaginationSchema.extend({
  items: externalPropertyHistorySchema.array(),
});

export { externalPropertyHistoriesSchema, type ExternalPropertyHistory };

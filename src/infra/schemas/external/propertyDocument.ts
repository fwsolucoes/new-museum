import { z } from "zod";
import { externalPaginationSchema } from "./pagination";

type ExternalPropertyDocument = z.infer<typeof externalPropertyDocumentSchema>;

const externalPropertyDocumentSchema = z.strictObject({
  id: z.uuidv7(),
  propertyId: z.uuidv7(),
  name: z.string(),
  description: z.string().nullable(),
  file: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.null(),
});

const externalPropertyDocumentsSchema = externalPaginationSchema.extend({
  items: externalPropertyDocumentSchema.array(),
});

export { externalPropertyDocumentsSchema, type ExternalPropertyDocument };

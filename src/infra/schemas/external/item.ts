import { z } from "zod";
import { externalPaginationSchema } from "./pagination";

type ExternalItem = z.infer<typeof externalItemSchema>;

const externalItemSchema = z.object({
  id: z.uuid(),
  account_id: z.uuid(),
  type: z.number(),
  code: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  image: z.string().nullable(),
  audio: z.string().nullable(),
  created_at: z.string(),
});

const externalItemsSchema = externalPaginationSchema.extend({
  data: externalItemSchema.array(),
});

export { externalItemsSchema, externalItemSchema, type ExternalItem };

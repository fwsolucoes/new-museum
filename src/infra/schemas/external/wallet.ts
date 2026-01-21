import { z } from "zod";
import { externalPaginationSchema } from "./pagination";

type ExternalWallet = z.infer<typeof externalWalletSchema>;

const externalWalletSchema = z.strictObject({
  id: z.uuidv7(),
  name: z.string(),
  description: z.string(),
  status: z.enum(["ACTIVE", "INACTIVE"]),
  since: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.null(),
});

const externalWalletsSchema = externalPaginationSchema.extend({
  items: externalWalletSchema.array(),
});

export { externalWalletsSchema, type ExternalWallet };

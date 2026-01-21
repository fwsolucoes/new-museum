import { z } from "zod";
import { externalPaginationSchema } from "./pagination";

type ExternalCustomer = z.infer<typeof externalCustomerSchema>;

const externalSignCustomerSchema = z.strictObject({
  id: z.uuidv7(),
  name: z.string(),
  email: z.email(),
  status: z.enum(["ACTIVE", "INACTIVE"]),
  walletId: z.uuidv7(),
  createdAt: z.string(),
  updatedAt: z.string(),
  sub: z.string(),
  type: z.string(),
  iat: z.number(),
  exp: z.number(),
  token: z.string(),
});

const externalCustomerSchema = z.strictObject({
  id: z.uuidv7(),
  name: z.string(),
  email: z.email(),
  status: z.enum(["ACTIVE", "INACTIVE"]),
  walletId: z.uuidv7(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.null(),
});

const externalCustomersSchema = externalPaginationSchema.extend({
  items: externalCustomerSchema.array(),
});

export {
  externalCustomerSchema,
  externalSignCustomerSchema,
  externalCustomersSchema,
  type ExternalCustomer,
};

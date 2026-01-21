import { z } from "zod";

type ExternalAdmin = z.infer<typeof externalAdminSchema>;

const externalTokenSchema = z.strictObject({
  jwt: z.string(),
});

const externalAdminSchema = z.strictObject({
  sub: z.string(),
  iat: z.number(),
  exp: z.number(),
  id: z.uuidv7(),
  email: z.email(),
  name: z.string(),
  status: z.enum(["ACTIVE", "INACTIVE"]),
  type: z.enum(["user"]),
  token: z.string(),
});

export { externalTokenSchema, externalAdminSchema, type ExternalAdmin };

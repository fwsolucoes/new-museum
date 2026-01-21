import { z } from "zod";

type ExternalUser = z.infer<typeof externalUserSchema>;

const externalUserSchema = z.object({
  user: z.object({
    id: z.string(),
    email: z.string(),
    name: z.string(),
    accounts: z.array(
      z.object({
        id: z.uuid(),
      }),
    ),
  }),
  token: z.object({
    accessToken: z.string(),
  }),
});

export { externalUserSchema, type ExternalUser };

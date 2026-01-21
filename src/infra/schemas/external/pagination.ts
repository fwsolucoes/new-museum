import z from "zod";

const externalPaginationSchema = z.strictObject({
  total: z.number(),
  page: z.number(),
  take: z.number(),
});

export { externalPaginationSchema };

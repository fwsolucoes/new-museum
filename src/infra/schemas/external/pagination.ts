import z from "zod";

const externalPaginationSchema = z.object({
  meta: z.object({
    totalItems: z.number(),
    currentPage: z.number(),
    itemsPerPage: z.number(),
    totalPages: z.number(),
  }),
});

export { externalPaginationSchema };

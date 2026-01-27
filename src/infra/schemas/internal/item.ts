import z from "zod";
import { paginationSchema } from "./pagination";

const listItemSchema = paginationSchema.extend({
  search: z.string().optional(),
});

export { listItemSchema };

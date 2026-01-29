import z from "zod";
import { paginationSchema } from "./pagination";

const findAllItemsSchema = paginationSchema.extend({
  search: z.string().optional(),
});

type CreateItemType = z.infer<typeof createItemSchema>;

const createItemSchema = z.object({
  code: z.string().min(1, "O código é obrigatório"),
  name: z.string().min(1, "O nome é obrigatório"),
  description: z.string().min(1, "A descrição é obrigatória"),
  image: z.string().optional(),
  audio: z.string().optional(),
  video: z.string().optional(),
});

export { findAllItemsSchema, createItemSchema, type CreateItemType };

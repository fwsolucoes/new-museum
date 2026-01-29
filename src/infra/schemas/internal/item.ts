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

type UpdateItemType = z.infer<typeof updateItemSchema>;

const updateItemSchema = z.object({
  id: z.uuid("ID inválido"),
  code: z.string().min(1, "O código é obrigatório"),
  name: z.string().min(1, "O nome é obrigatório"),
  description: z.string().min(1, "A descrição é obrigatória"),
  image: z.string().optional(),
  audio: z.string().optional(),
  video: z.string().optional(),
});

type DeleteItemType = z.infer<typeof deleteItemSchema>;

const deleteItemSchema = z.object({
  id: z.uuid("ID inválido"),
});

export {
  findAllItemsSchema,
  createItemSchema,
  updateItemSchema,
  deleteItemSchema,
  type CreateItemType,
  type UpdateItemType,
  type DeleteItemType,
};

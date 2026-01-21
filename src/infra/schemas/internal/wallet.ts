import { z } from "zod";
import { FormatAdapter } from "~/infra/adapters/formatAdapter";
import { ValidateAdapter } from "~/infra/adapters/validateAdapter";
import { paginationSchema } from "./pagination";

const listWalletsSchema = paginationSchema.extend({
  name: z.string().optional(),
  status: z.string().optional(),
});

const createWalletSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
  since: z
    .string()
    .min(10, "Data inválida")
    .max(10, "Data inválida")
    .refine(ValidateAdapter.date, "Data inválida")
    .transform(FormatAdapter.toDate),
});

const updateWalletSchema = z.object({
  id: z.uuidv7("ID da carteira é obrigatório"),
  name: z.string().min(1, "Nome é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
  since: z
    .string()
    .min(10, "Data inválida")
    .max(10, "Data inválida")
    .refine(ValidateAdapter.date, "Data inválida")
    .transform(FormatAdapter.toDate),
  status: z.enum(["active", "inactive"]),
});

const deleteWalletSchema = z.object({
  id: z.uuidv7("ID da carteira é obrigatório"),
});

export {
  createWalletSchema,
  deleteWalletSchema,
  listWalletsSchema,
  updateWalletSchema,
};

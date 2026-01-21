import { z } from "zod";
import { paginationSchema } from "./pagination";
import { ValidateAdapter } from "~/infra/adapters/validateAdapter";
import { FormatAdapter } from "~/infra/adapters/formatAdapter";

const listPropertyHistoriesSchema = paginationSchema.extend({
  propertyId: z.uuidv7(),
});

const createPropertyHistorySchema = z.object({
  propertyId: z.uuidv7("Propriedade obrigatória"),
  name: z.string().min(1, "Nome obrigatório"),
  description: z.string().min(1, "Descrição obrigatória"),
  statusId: z.uuidv7("Status obrigatório"),
  occurredAt: z
    .string()
    .min(10, "Data inválida")
    .max(10, "Data inválida")
    .refine(ValidateAdapter.date, "Data inválida")
    .transform(FormatAdapter.toDate),
});

const updatePropertyHistorySchema = z.object({
  id: z.uuidv7("ID do proprietário é obrigatório"),
  name: z.string().min(1, "Nome obrigatório"),
  description: z.string().min(1, "Descrição obrigatória"),
  statusId: z.uuidv7("Status obrigatório"),
  occurredAt: z
    .string()
    .min(10, "Data inválida")
    .max(10, "Data inválida")
    .refine(ValidateAdapter.date, "Data inválida")
    .transform(FormatAdapter.toDate),
});

const deletePropertyHistorySchema = z.object({
  id: z.uuidv7("ID da carteira é obrigatório"),
});

export {
  createPropertyHistorySchema,
  deletePropertyHistorySchema,
  listPropertyHistoriesSchema,
  updatePropertyHistorySchema,
};

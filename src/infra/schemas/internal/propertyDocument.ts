import { z } from "zod";
import { paginationSchema } from "./pagination";

const listPropertyDocumentsSchema = paginationSchema.extend({
  propertyId: z.uuidv7(),
});

const createPropertyDocumentSchema = z.object({
  propertyId: z.uuidv7("Propriedade obrigatória"),
  name: z.string().min(1, "Nome obrigatório"),
  description: z.string().optional(),
  file: z.url("Arquivo obrigatório"),
});

const updatePropertyDocumentSchema = z.object({
  id: z.uuidv7("ID do proprietário é obrigatório"),
  name: z.string().min(1, "Nome obrigatório"),
  description: z.string().optional(),
  file: z.url("Arquivo obrigatório"),
});

const deletePropertyDocumentSchema = z.object({
  id: z.uuidv7("ID da carteira é obrigatório"),
});

export {
  createPropertyDocumentSchema,
  deletePropertyDocumentSchema,
  listPropertyDocumentsSchema,
  updatePropertyDocumentSchema,
};

import { z } from "zod";
import { paginationSchema } from "./pagination";
import { ValidateAdapter } from "~/infra/adapters/validateAdapter";

const listPropertyOwnersSchema = paginationSchema.extend({
  legalName: z.string().optional(),
  status: z.string().optional(),
  walletId: z.uuidv7().optional(),
});

const createPropertyOwnerSchema = z
  .object({
    reference: z.string().min(1, "Referência obrigatória"),
    walletId: z.uuidv7("Carteira obrigatória"),
    taxIdentifierKind: z.enum(["pf", "pj"], "Identificador obrigatório"),
    taxIdentifierValue: z.string().min(1, "CPF/CNPJ obrigatório"),
    legalName: z.string().min(1, "Razão social obrigatório"),
    tradeName: z.string().min(1, "Nome fantasia obrigatório"),
    status: z.enum(["active", "inactive"], "Status invalido"),
  })
  .refine(
    (data) => {
      if (data.taxIdentifierKind === "pf") {
        return ValidateAdapter.cpf(data.taxIdentifierValue);
      } else {
        return true;
      }
    },
    { path: ["taxIdentifierValue"], message: "CPF inválido" },
  )
  .refine(
    (data) => {
      if (data.taxIdentifierKind === "pj") {
        return ValidateAdapter.cnpj(data.taxIdentifierValue);
      } else {
        return true;
      }
    },
    { path: ["taxIdentifierValue"], message: "CNPJ inválido" },
  );

const updatePropertyOwnerSchema = z
  .object({
    id: z.uuidv7("ID do proprietário é obrigatório"),
    reference: z.string().min(1, "Referência obrigatória"),
    walletId: z.uuidv7("Carteira obrigatória"),
    taxIdentifierKind: z.enum(["pf", "pj"], "Identificador obrigatório"),
    taxIdentifierValue: z.string().min(1, "CPF/CNPJ obrigatório"),
    legalName: z.string().min(1, "Razão social obrigatório"),
    tradeName: z.string().min(1, "Nome fantasia obrigatório"),
    status: z.enum(["active", "inactive"], "Status invalido"),
  })
  .refine(
    (data) => {
      if (data.taxIdentifierKind === "pf") {
        if (!ValidateAdapter.cpf(data.taxIdentifierValue)) return false;
        return true;
      }
      return true;
    },
    { path: ["taxIdentifierValue"], message: "CPF inválido" },
  )
  .refine(
    (data) => {
      if (data.taxIdentifierKind === "pj") {
        if (!ValidateAdapter.cnpj(data.taxIdentifierValue)) return false;
        return true;
      }
      return true;
    },
    { path: ["taxIdentifierValue"], message: "CNPJ inválido" },
  );

const deletePropertyOwnerSchema = z.object({
  id: z.uuidv7("ID da carteira é obrigatório"),
});

export {
  createPropertyOwnerSchema,
  deletePropertyOwnerSchema,
  listPropertyOwnersSchema,
  updatePropertyOwnerSchema,
};

import { z } from "zod";
import { paginationSchema } from "./pagination";

const signCustomerSchema = z.object({
  email: z.email("E-mail inválido"),
  password: z.string().min(1, "Senha é obrigatória"),
});

const listCustomersSchema = paginationSchema.extend({
  name: z.string().optional(),
  status: z.string().optional(),
  walletId: z.uuidv7().optional(),
});

const createCustomerSchema = z
  .object({
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.email("E-mail inválido"),
    password: z.string().min(8, "Senha deve ter no mínimo 8 caracteres"),
    confirmPassword: z.string().min(8, "Confirmação de senha é obrigatória"),
    walletId: z.uuidv7("Carteira de imóveis é obrigatória"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não coincidem",
    path: ["confirmPassword"],
  })
  .transform(({ confirmPassword, ...data }) => data);

const updateCustomerSchema = z
  .object({
    id: z.uuidv7("ID do Usuário é obrigatório"),
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.email("E-mail inválido"),
    password: z.string().optional(),
    confirmPassword: z.string().optional(),
    walletId: z.uuidv7("Carteira de imóveis é obrigatória"),
    status: z.enum(["active", "inactive"]),
  })
  .refine(
    ({ password }) => {
      if (password) return password.length >= 8;
      return true;
    },
    { message: "Senha deve ter no mínimo 8 caracteres", path: ["password"] },
  )
  .refine(
    ({ password, confirmPassword }) => {
      if (password || confirmPassword) return password === confirmPassword;
      return true;
    },
    { path: ["confirmPassword"], message: "Senhas não coincidem" },
  )
  .transform(({ confirmPassword, ...data }) => ({
    ...data,
    password: data.password || null,
  }));

const deleteCustomerSchema = z.object({
  id: z.uuidv7("ID do Usuário é obrigatório"),
});

export {
  createCustomerSchema,
  listCustomersSchema,
  deleteCustomerSchema,
  signCustomerSchema,
  updateCustomerSchema,
};

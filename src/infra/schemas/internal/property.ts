import z from "zod";
import { paginationSchema } from "./pagination";

const listPropertySchema = paginationSchema.extend({
  propertyOwnerId: z.uuidv7().optional(),
  name: z.string().optional(),
  walletId: z.uuidv7().optional(),
  status: z
    .enum([
      "underRegularization",
      "sold",
      "rentedNormal",
      "rentedLegal",
      "rentedVacant",
      "rentedClaim",
      "available",
    ])
    .optional(),
});

const createPropertySchema = z.object({
  image: z.string().min(1, "Imagem do imóvel obrigatório"),
  propertyOwnerId: z.uuidv7("Proprietário obrigatório"),
  status: z.enum(
    ["underRegularization", "sold"],
    "Campo de status obrigatório",
  ),
  registration: z.string().min(1, "Matrícula obrigatória"),
  reference: z.string().min(1, "Código externo obrigatório"),
  name: z.string().min(1, "Nome do imóvel obrigatório"),
  description: z.string().min(1, "Descrição obrigatória"),
  postalCode: z.string().min(1, "CEP obrigatório"),
  latitude: z.string().min(1, "Latitude obrigatória").transform(Number),
  longitude: z.string().min(1, "Longitude obrigatória").transform(Number),
  street: z.string().min(1, "Rua obrigatória"),
  number: z.string().min(1, "Número obrigatório"),
  neighborhood: z.string().min(1, "Bairro obrigatório"),
  complement: z.string().min(1, "Complemento obrigatório"),
  city: z.string().min(1, "Cidade obrigatória"),
  state: z.string().min(1, "Estado obrigatório"),
  fullAddress: z.string().min(1, "Endereço obrigatório"),
  walletId: z.uuidv7("Carteira obrigatória"),
});

const updatePropertySchema = z.object({
  id: z.uuidv7("ID obrigatório"),
  images: z.string().min(1, "Imagem do imóvel obrigatório"),
  status: z.enum(
    ["underRegularization", "sold"],
    "Campo de status obrigatório",
  ),
  registration: z.string().min(1, "Matrícula obrigatória"),
  reference: z.string().min(1, "Código externo obrigatório"),
  name: z.string().min(1, "Nome do imóvel obrigatório"),
  description: z.string().min(1, "Descrição obrigatória"),
  postalCode: z.string().min(1, "CEP obrigatório"),
  latitude: z.string().min(1, "Latitude obrigatória").transform(Number),
  longitude: z.string().min(1, "Longitude obrigatória").transform(Number),
  street: z.string().min(1, "Rua obrigatória"),
  number: z.string().min(1, "Número obrigatório"),
  neighborhood: z.string().min(1, "Bairro obrigatório"),
  complement: z.string().min(1, "Complemento obrigatório"),
  city: z.string().min(1, "Cidade obrigatória"),
  state: z.string().min(1, "Estado obrigatório"),
  fullAddress: z.string().min(1, "Endereço obrigatório"),
  propertyOwnerId: z.uuidv7("Propriedade é obrigatória"),
  walletId: z.uuidv7("Carteira é obrigatória"),
});

const deletePropertySchema = z.strictObject({
  id: z.uuidv7("ID do imóvel é obrigatório"),
});

export {
  createPropertySchema,
  deletePropertySchema,
  listPropertySchema,
  updatePropertySchema,
};

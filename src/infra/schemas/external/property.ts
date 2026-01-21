import { z } from "zod";
import { externalPaginationSchema } from "./pagination";

type ExternalProperty = z.infer<typeof externalPropertySchema>;

const externalPropertySchema = z.strictObject({
  id: z.uuidv7(),
  propertyOwnerId: z.uuidv7(),
  externalReference: z.string(),
  consolidatedStatus: z.enum([
    "RENTED_NORMAL", // Contrato ativo - Normal
    "RENTED_LEGAL", // Contrato ativo - Jurídico
    "RENTED_VACANT", // Contrato ativo - Desocupação
    "RENTED_CLAIM", // Contrato ativo - Sinistro
    "AVAILABLE", // Disponível para locação
    "UNDER_REGULARIZATION", // Em processo de regularização
    "SOLD", // Imóvel vendido
  ]),
  contractStatus: z.string().nullable(),
  status: z.string().nullable(),
  externalStatus: z.string().nullable(),
  usageType: z.string(),
  name: z.string(),
  images: z.string(),
  description: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  registration: z.string(),
  erpSyncedAt: z.string().nullable(),
  contractReference: z.string().nullable(),
  contractStartDate: z.string().nullable(),
  contractEndDate: z.string().nullable(),
  contractAdjustmentIndex: z.string().nullable(),
  contractReviewDate: z.string().nullable(),
  contractGuarantee: z.string().nullable(),
  contractFireInsurance: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.null(),
});

const externalPropertiesSchema = externalPaginationSchema.extend({
  items: externalPropertySchema.array(),
});

const externalPropertyMetricsSchema = z.strictObject({
  RENTED_NORMAL: z.number().min(0),
  RENTED_LEGAL: z.number().min(0),
  RENTED_VACANT: z.number().min(0),
  RENTED_CLAIM: z.number().min(0),
  AVAILABLE: z.number().min(0),
  UNDER_REGULARIZATION: z.number().min(0),
  SOLD: z.number().min(0),
  TOTAL: z.number().min(0),
});

const externalMapViewsSchema = externalPropertySchema.array();

export {
  externalMapViewsSchema,
  externalPropertiesSchema,
  externalPropertyMetricsSchema,
  externalPropertySchema,
  type ExternalProperty,
};

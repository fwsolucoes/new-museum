import { z } from "zod";

class EnvError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EnvError";
  }
}

const environmentVariablesSchema = z.object({
  // API configuration
  API_URL: z.string(),
  API_DATABASE: z.string().min(1),

  // Another configurations
  GOOGLE_API_KEY: z.string(),
  WHATSAPP_SUPPORT_NUMBER: z.string(),

  // File storage configuration
  AWS_ACCESS_KEY_ID: z.string(),
  AWS_DOMAIN: z.url(),
  AWS_SECRET_ACCESS_KEY: z.string(),
  AWS_REGION: z.string(),
  AWS_S3_BUCKET: z.string(),
});

function formatErrorMessage(error: z.ZodError) {
  const title = "Error validating env variables:";
  const lines = Object.entries(error.flatten().fieldErrors).map(
    ([key, value]) => `-> ${key}: ${value}`,
  );
  return [title, ...lines].join("\n");
}

const parsedEnv = () => {
  try {
    return environmentVariablesSchema.parse(process.env);
  } catch (error: any) {
    throw new EnvError(formatErrorMessage(error));
  }
};

const environmentVariables = parsedEnv();

export { environmentVariables };

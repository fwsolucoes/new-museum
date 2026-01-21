import type { PropertyGatewayDTO } from "~/domain/gateways/property";
import { RedirectServerAdapter } from "~/infra/adapters/redirectServerAdapter";

type InputProps = {
  id: string;
  propertyOwnerId: string;
  name: string;
  reference: string;
  registration: string;
  status: "underRegularization" | "sold";
  images: string;
  description: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  fullAddress: string;
  walletId: string;
};

class UpdatePropertyUseCase {
  constructor(private propertyGateway: PropertyGatewayDTO) {}

  async execute(input: InputProps, token: string) {
    await this.propertyGateway.updateProperty(input, token);
    throw RedirectServerAdapter.to("/admin/properties");
  }
}

export { UpdatePropertyUseCase };

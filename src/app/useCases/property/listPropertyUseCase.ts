import type { PropertyGatewayDTO } from "~/domain/gateways/property";

class ListPropertyUseCase {
  constructor(private propertyGateway: PropertyGatewayDTO) {}

  async execute(id: string, token: string) {
    const property = await this.propertyGateway.findById(id, token);
    return property.toJson();
  }
}

export { ListPropertyUseCase };

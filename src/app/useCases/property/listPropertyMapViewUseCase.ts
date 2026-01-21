import type { PropertyGatewayDTO } from "~/domain/gateways/property";

class ListPropertyMapViewUseCase {
  constructor(private propertyGateway: PropertyGatewayDTO) {}

  async execute(token: string, walletId?: string) {
    const propertyMapView = await this.propertyGateway.findMapView(
      token,
      walletId,
    );

    return propertyMapView.map((property) => property.toJson());
  }
}

export { ListPropertyMapViewUseCase };

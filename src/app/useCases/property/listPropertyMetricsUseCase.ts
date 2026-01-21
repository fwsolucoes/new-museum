import type { PropertyGatewayDTO } from "~/domain/gateways/property";

class ListPropertyMetricsUseCase {
  constructor(private propertyGateway: PropertyGatewayDTO) {}

  async execute(token: string, walletId?: string) {
    const propertyMetrics = await this.propertyGateway.findMetrics(
      token,
      walletId,
    );
    return propertyMetrics;
  }
}

export { ListPropertyMetricsUseCase };

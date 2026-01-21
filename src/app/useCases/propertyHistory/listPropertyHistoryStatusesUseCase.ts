import type { PropertyHistoryGatewayDTO } from "~/domain/gateways/propertyHistory";

class ListPropertyHistoryStatusesUseCase {
  constructor(private propertyHistoryGateway: PropertyHistoryGatewayDTO) {}

  async execute(token: string) {
    const propertyHistories =
      await this.propertyHistoryGateway.listStatuses(token);

    return propertyHistories;
  }
}

export { ListPropertyHistoryStatusesUseCase };

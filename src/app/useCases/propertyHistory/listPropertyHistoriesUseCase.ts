import { PropertyHistorySearchParams } from "~/app/search/propertyHistorySearchParams";
import type { PropertyHistoryGatewayDTO } from "~/domain/gateways/propertyHistory";

type InputProps = {
  page?: number | null;
  filter: {
    propertyId: string;
  };
};

class ListPropertyHistoriesUseCase {
  constructor(private propertyHistoryGateway: PropertyHistoryGatewayDTO) {}

  async execute(input: InputProps, token: string) {
    const { page, filter } = input;
    const searchParams = new PropertyHistorySearchParams({ page, filter });

    const propertyHistories =
      await this.propertyHistoryGateway.listPropertyHistories(
        searchParams,
        token
      );

    return propertyHistories.toJson();
  }
}

export { ListPropertyHistoriesUseCase };

import { PropertyOwnerSearchParams } from "~/app/search/propertyOwnerSearchParams";
import type { PropertyOwnerGatewayDTO } from "~/domain/gateways/propertyOwner";

type InputProps = {
  page?: number | null;
  filter: { legalName?: string; status?: string };
};

class ListPropertyOwnersUseCase {
  constructor(private propertyOwnerGateway: PropertyOwnerGatewayDTO) {}

  async execute(input: InputProps, token: string) {
    const { page, filter } = input;
    const searchParams = new PropertyOwnerSearchParams({ page, filter });

    const propertyOwners = await this.propertyOwnerGateway.listPropertyOwners(
      searchParams,
      token
    );

    return propertyOwners.toJson();
  }
}

export { ListPropertyOwnersUseCase };

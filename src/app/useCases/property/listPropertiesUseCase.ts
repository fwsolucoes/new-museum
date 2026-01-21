import { PropertySearchParams } from "~/app/search/propertySearchParams";
import type { PropertyGatewayDTO } from "~/domain/gateways/property";

type InputProps = {
  page?: number | null;
  filter: { name?: string; status?: string; propertyOwnerId?: string };
};

class ListPropertiesUseCase {
  constructor(private propertyGateway: PropertyGatewayDTO) {}

  async execute(input: InputProps, token: string) {
    const { page, filter } = input;
    const searchParams = new PropertySearchParams({ page, filter });

    const properties = await this.propertyGateway.listProperties(
      searchParams,
      token,
    );

    return properties.toJson();
  }
}

export { ListPropertiesUseCase };

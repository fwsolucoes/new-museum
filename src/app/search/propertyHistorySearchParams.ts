import { SearchParams } from "../shared/searchParams";

type Filter = {
  propertyId: string;
};

class PropertyHistorySearchParams extends SearchParams<Filter> {}

export { PropertyHistorySearchParams };

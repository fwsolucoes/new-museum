import { SearchParams } from "../shared/searchParams";

type Filter = {
  propertyId: string;
};

class PropertyDocumentSearchParams extends SearchParams<Filter> {}

export { PropertyDocumentSearchParams };

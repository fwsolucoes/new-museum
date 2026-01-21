import { SearchParams } from "../shared/searchParams";

type Filter = {
  name?: string;
  status?: string;
  propertyOwnerId?: string;
  walletId?: string;
};

class PropertySearchParams extends SearchParams<Filter> {
  constructor(any: any) {
    super(any);

    if (this.filter?.status) {
      switch (this.filter.status) {
        case "underRegularization":
          this.filter.status = "UNDER_REGULARIZATION";
          break;
        case "sold":
          this.filter.status = "SOLD";
          break;
        case "rentedNormal":
          this.filter.status = "RENTED_NORMAL";
          break;
        case "rentedLegal":
          this.filter.status = "RENTED_LEGAL";
          break;
        case "rentedVacant":
          this.filter.status = "RENTED_VACANT";
          break;
        case "rentedClaim":
          this.filter.status = "RENTED_CLAIM";
          break;
        case "available":
          this.filter.status = "AVAILABLE";
          break;
      }
    }
  }
}

export { PropertySearchParams };

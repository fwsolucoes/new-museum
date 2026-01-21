import { SearchParams } from "../shared/searchParams";

type Filter = {
  name?: string;
  status?: string;
  walletId?: string;
};

class CustomerSearchParams extends SearchParams<Filter> {
  constructor(any: any) {
    super(any);

    if (this.filter?.status) {
      this.filter.status = this.filter.status.toUpperCase();
    }
  }
}

export { CustomerSearchParams };

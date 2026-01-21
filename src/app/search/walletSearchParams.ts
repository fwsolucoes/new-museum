import { SearchParams } from "../shared/searchParams";

type Filter = {
  name?: string;
  status?: string;
};

class WalletSearchParams extends SearchParams<Filter> {
  constructor(any: any) {
    super(any);

    if (this.filter?.status) {
      this.filter.status = this.filter.status.toUpperCase();
    }
  }
}

export { WalletSearchParams };

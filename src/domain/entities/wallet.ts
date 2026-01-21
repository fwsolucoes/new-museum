import { FormatAdapter } from "~/infra/adapters/formatAdapter";

type WalletConstructorProps = {
  id: string;
  name: string;
  description: string;
  status: "active" | "inactive";
  since: Date;
  createdAt: Date;
  updatedAt: Date;
};

type WalletRestoreProps = WalletConstructorProps;

class Wallet {
  id: string;
  name: string;
  description: string;
  status: "active" | "inactive";
  since: Date;
  createdAt: Date;
  updatedAt: Date;

  private constructor(props: WalletConstructorProps) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    this.status = props.status;
    this.since = props.since;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  static restore(props: WalletRestoreProps): Wallet {
    return new Wallet({
      id: props.id,
      name: props.name,
      description: props.description,
      status: props.status,
      since: props.since,
      createdAt: props.createdAt,
      updatedAt: props.updatedAt,
    });
  }

  toJson() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      status: this.status,
      since: FormatAdapter.date(this.since),
      createdAt: FormatAdapter.date(this.createdAt),
      updatedAt: FormatAdapter.date(this.updatedAt),
    };
  }
}

export { Wallet };

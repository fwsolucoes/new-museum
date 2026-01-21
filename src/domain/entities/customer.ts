import { FormatAdapter } from "~/infra/adapters/formatAdapter";

type CustomerConstructorProps = {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive";
  avatar: string;
  walletId: string;
  createdAt: Date;
  updatedAt: Date;
};

type CustomerRestoreProps = CustomerConstructorProps;

class Customer {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive";
  avatar: string;
  walletId: string;
  createdAt: Date;
  updatedAt: Date;

  private constructor(props: CustomerConstructorProps) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.status = props.status;
    this.avatar = props.avatar;
    this.walletId = props.walletId;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  static restore(props: CustomerRestoreProps): Customer {
    return new Customer({
      id: props.id,
      name: props.name,
      email: props.email,
      status: props.status,
      avatar: props.avatar,
      walletId: props.walletId,
      createdAt: props.createdAt,
      updatedAt: props.updatedAt,
    });
  }

  toJson() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      status: this.status,
      avatar: this.avatar,
      walletId: this.walletId,
      createdAt: FormatAdapter.date(this.createdAt),
      updatedAt: FormatAdapter.date(this.updatedAt),
    };
  }
}

export { Customer };

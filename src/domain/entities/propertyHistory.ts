import { FormatAdapter } from "~/infra/adapters/formatAdapter";

type PropertyHistoryConstructorProps = {
  id: string;
  propertyId: string;
  name: string;
  description: string | null;
  statusId: string;
  occurredAt: Date;
  createdAt: Date;
  updatedAt: Date;
};

type PropertyHistoryRestoreProps = PropertyHistoryConstructorProps;

class PropertyHistory {
  id: string;
  propertyId: string;
  name: string;
  description: string | null;
  statusId: string;
  occurredAt: Date;
  createdAt: Date;
  updatedAt: Date;

  private constructor(props: PropertyHistoryConstructorProps) {
    this.id = props.id;
    this.propertyId = props.propertyId;
    this.name = props.name;
    this.description = props.description;
    this.statusId = props.statusId;
    this.occurredAt = props.occurredAt;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  static restore(props: PropertyHistoryRestoreProps): PropertyHistory {
    return new PropertyHistory({
      id: props.id,
      propertyId: props.propertyId,
      name: props.name,
      description: props.description,
      statusId: props.statusId,
      occurredAt: props.occurredAt,
      createdAt: props.createdAt,
      updatedAt: props.updatedAt,
    });
  }

  toJson() {
    return {
      id: this.id,
      propertyId: this.propertyId,
      name: this.name,
      description: this.description,
      statusId: this.statusId,
      occurredAt: FormatAdapter.date(this.occurredAt),
      createdAt: FormatAdapter.date(this.createdAt),
      updatedAt: FormatAdapter.date(this.updatedAt),
    };
  }
}

export { PropertyHistory };

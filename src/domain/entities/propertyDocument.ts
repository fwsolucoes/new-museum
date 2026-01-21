import { FormatAdapter } from "~/infra/adapters/formatAdapter";

type PropertyDocumentConstructorProps = {
  id: string;
  propertyId: string;
  name: string;
  description: string | null;
  file: string;
  createdAt: Date;
  updatedAt: Date;
};

type PropertyDocumentRestoreProps = PropertyDocumentConstructorProps;

class PropertyDocument {
  id: string;
  propertyId: string;
  name: string;
  description: string | null;
  file: string;
  createdAt: Date;
  updatedAt: Date;

  private constructor(props: PropertyDocumentConstructorProps) {
    this.id = props.id;
    this.propertyId = props.propertyId;
    this.name = props.name;
    this.description = props.description;
    this.file = props.file;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  static restore(props: PropertyDocumentRestoreProps): PropertyDocument {
    return new PropertyDocument({
      id: props.id,
      propertyId: props.propertyId,
      name: props.name,
      description: props.description,
      file: props.file,
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
      file: this.file,
      createdAt: FormatAdapter.date(this.createdAt),
      updatedAt: FormatAdapter.date(this.updatedAt),
    };
  }
}

export { PropertyDocument };

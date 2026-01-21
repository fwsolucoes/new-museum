import { FormatAdapter } from "~/infra/adapters/formatAdapter";

type PropertyOwnerConstructorProps = {
  id: string;
  walletId: string;
  reference: string;
  legalName: string;
  tradeName: string | null;
  propertiesCount: number;
  taxIdentifierValue: string;
  taxIdentifierKind: "pf" | "pj";
  status: "active" | "inactive";
};

type PropertyOwnerRestoreProps = PropertyOwnerConstructorProps;

class PropertyOwner {
  id: string;
  walletId: string;
  reference: string;
  legalName: string;
  tradeName: string | null;
  propertiesCount: number;
  taxIdentifierValue: string;
  taxIdentifierKind: "pf" | "pj";
  status: "active" | "inactive";

  private constructor(props: PropertyOwnerConstructorProps) {
    this.id = props.id;
    this.walletId = props.walletId;
    this.reference = props.reference;
    this.legalName = props.legalName;
    this.tradeName = props.tradeName;
    this.propertiesCount = props.propertiesCount;
    this.taxIdentifierValue = props.taxIdentifierValue;
    this.taxIdentifierKind = props.taxIdentifierKind;
    this.status = props.status;
  }

  static restore(props: PropertyOwnerRestoreProps): PropertyOwner {
    return new PropertyOwner({
      id: props.id,
      walletId: props.walletId,
      reference: props.reference,
      legalName: props.legalName,
      tradeName: props.tradeName,
      propertiesCount: props.propertiesCount,
      taxIdentifierValue: props.taxIdentifierValue,
      taxIdentifierKind: props.taxIdentifierKind,
      status: props.status,
    });
  }

  toJson() {
    return {
      id: this.id,
      walletId: this.walletId,
      reference: this.reference,
      legalName: this.legalName,
      tradeName: this.tradeName,
      propertiesCount: this.propertiesCount,
      taxIdentifierValue:
        this.taxIdentifierKind === "pj"
          ? FormatAdapter.cnpj(this.taxIdentifierValue)
          : FormatAdapter.cpf(this.taxIdentifierValue),
      taxIdentifierKind: this.taxIdentifierKind,
      status: this.status,
    };
  }
}

export { PropertyOwner };

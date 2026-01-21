type ContractProps = {
  reference: string;
  startDate: Date;
  endDate: Date;
  reviewDate: Date;
  adjustmentIndex: string;
  guarantee: string;
  fireInsurance: boolean;
};

type StatusType =
  | "rentedNormal"
  | "rentedLegal"
  | "rentedVacant"
  | "rentedClaim"
  | "available"
  | "underRegularization"
  | "sold";

type PropertyConstructorProps = {
  id: string;
  image: string;
  name: string;
  description: string;
  street: string;
  streetNumber: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
  number: string;
  propertyOwnerId: string;
  registration: string;
  externalReference: string | null;
  latitude: number;
  longitude: number;
  contract: ContractProps | null;
  status: StatusType;
};

type PropertyRestoreProps = PropertyConstructorProps;

class Property {
  id: string;
  image: string;
  name: string;
  description: string;
  street: string;
  streetNumber: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
  registration: string;
  externalReference: string | null;
  latitude: number;
  longitude: number;
  contract: ContractProps | null;
  number: string;
  propertyOwnerId: string;
  status: StatusType;

  private constructor(props: PropertyConstructorProps) {
    this.id = props.id;
    this.image = props.image;
    this.name = props.name;
    this.description = props.description;
    this.street = props.street;
    this.streetNumber = props.streetNumber;
    this.complement = props.complement;
    this.neighborhood = props.neighborhood;
    this.city = props.city;
    this.state = props.state;
    this.postalCode = props.postalCode;
    this.registration = props.registration;
    this.externalReference = props.externalReference;
    this.contract = props.contract;
    this.number = props.number;
    this.latitude = props.latitude;
    this.longitude = props.longitude;
    this.propertyOwnerId = props.propertyOwnerId;
    this.status = props.status;
  }

  static restore(props: PropertyRestoreProps): Property {
    return new Property({
      id: props.id,
      image: props.image,
      name: props.name,
      description: props.description,
      street: props.street,
      streetNumber: props.streetNumber,
      complement: props.complement,
      neighborhood: props.neighborhood,
      city: props.city,
      state: props.state,
      postalCode: props.postalCode,
      registration: props.registration,
      externalReference: props.externalReference,
      contract: props.contract,
      status: props.status,
      number: props.number,
      latitude: props.latitude,
      longitude: props.longitude,
      propertyOwnerId: props.propertyOwnerId,
    });
  }

  private makeAddress() {
    let address = "";
    address += `${this.street}, ${this.streetNumber}`;
    if (this.complement) address += ` - ${this.complement},`;
    address += ` ${this.neighborhood}, ${this.city} - ${this.state}, ${this.postalCode}`;
    return address;
  }

  toJson() {
    return {
      id: this.id,
      image: this.image,
      name: this.name,
      description: this.description,
      street: this.street,
      streetNumber: this.streetNumber,
      complement: this.complement,
      neighborhood: this.neighborhood,
      city: this.city,
      state: this.state,
      postalCode: this.postalCode,
      fullAddress: this.makeAddress(),
      registration: this.registration,
      externalReference: this.externalReference,
      number: this.number,
      propertyOwnerId: this.propertyOwnerId,
      latitude: this.latitude,
      longitude: this.longitude,
      status: this.status,
      contract: this.contract
        ? {
            reference: this.contract.reference,
            startDate: this.contract.startDate.toDateString(),
            endDate: this.contract.endDate.toDateString(),
            reviewDate: this.contract.reviewDate.toDateString(),
            adjustmentIndex: this.contract.adjustmentIndex,
            guarantee: this.contract.guarantee,
            fireInsurance: this.contract.fireInsurance,
          }
        : null,
    };
  }
}

export { Property, type ContractProps as PropertyContractProps };

type ItemConstructorProps = {
  id: string;
  accountId: string;
  type: number;
  code: string;
  name: string;
  description: string;
  image: string;
  audio: string;
  createdAt: string;
};

type ItemRestoreProps = ItemConstructorProps;

class Item {
  id: string;
  accountId: string;
  type: number;
  code: string;
  name: string;
  description: string;
  image: string;
  audio: string;
  createdAt: string;

  private constructor(props: ItemConstructorProps) {
    this.id = props.id;
    this.image = props.image;
    this.name = props.name;
    this.description = props.description;
    this.accountId = props.accountId;
    this.type = props.type;
    this.code = props.code;
    this.audio = props.audio;
    this.createdAt = props.createdAt;
  }

  static restore(props: ItemRestoreProps): Item {
    return new Item({
      id: props.id,
      image: props.image,
      name: props.name,
      description: props.description,
      accountId: props.accountId,
      type: props.type,
      code: props.code,
      audio: props.audio,
      createdAt: props.createdAt,
    });
  }

  toJson() {
    return {
      id: this.id,
      image: this.image,
      name: this.name,
      description: this.description,
      accountId: this.accountId,
      type: this.type,
      code: this.code,
      audio: this.audio,
      createdAt: this.createdAt,
    };
  }
}

export { Item, type ItemConstructorProps as ItemContractProps };

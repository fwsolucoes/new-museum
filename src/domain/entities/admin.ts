type AdminConstructorProps = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

type AdminRestoreProps = AdminConstructorProps;

class Admin {
  id: string;
  name: string;
  email: string;
  avatar: string;

  private constructor(props: AdminConstructorProps) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.avatar = props.avatar;
  }

  static restore(props: AdminRestoreProps): Admin {
    return new Admin({
      id: props.id,
      name: props.name,
      email: props.email,
      avatar: props.avatar,
    });
  }

  toJson() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      avatar: this.avatar,
    };
  }
}

export { Admin };

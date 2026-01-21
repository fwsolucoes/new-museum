type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  token: string;
  walletId: string | undefined;
  type: "user" | "customer";
};

export type { User };

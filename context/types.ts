import { ReactNode } from "react";

export type UserContextProps = {
  children: ReactNode;
};

export type User = {
  id: string;
  username: string;
};

export type UserContextValue = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

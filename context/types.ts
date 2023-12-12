import { ReactNode } from "react";

export type UserContextProps = {
  children: ReactNode;
};

export type UserContextValue = {
  user: string | null;
  login: (user: string) => void;
  logout: () => void;
};

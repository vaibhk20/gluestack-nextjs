"use client";

import React, { createContext, useState } from "react";
import { UserContextProps, UserContextValue } from "@/context/types";

export const UserContext = createContext<UserContextValue>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  const [username, setUsername] = useState<string | null>(null);

  const loginHandler = (newUser: string) => {
    setUsername(newUser);
  };

  const logoutHandler = () => {
    setUsername(null);
  };

  const contextValue: UserContextValue = {
    user: username,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

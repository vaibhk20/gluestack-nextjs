"use client";

import React, { createContext, useState } from "react";
import { User, UserContextProps, UserContextValue } from "@/context/types";

export const UserContext = createContext<UserContextValue>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  const [username, setUsername] = useState<User | null>(null);

  const loginHandler = (newUser: User) => {
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

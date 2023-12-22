"use client";

import React, { createContext, useState } from "react";
import {
  BlogSchema,
  User,
  UserContextProps,
  UserContextValue,
} from "@/lib/schema";

export const UserContext = createContext<UserContextValue>({
  user: null,
  login: () => {},
  logout: () => {},
  isLoggedIn: false,
  uploadBlog: () => {},
});

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  const [username, setUsername] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const loginHandler = (newUser: User) => {
    setUsername(newUser);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setUsername(null);
    setIsLoggedIn(false);
  };

  const uploadBlog = async (newBlog: BlogSchema) => {
    const response = await fetch("/api/newpost", {
      method: "POST",
      body: JSON.stringify(newBlog),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response", response);
  };

  const contextValue: UserContextValue = {
    user: username,
    login: loginHandler,
    logout: logoutHandler,
    isLoggedIn: isLoggedIn,
    uploadBlog: uploadBlog,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

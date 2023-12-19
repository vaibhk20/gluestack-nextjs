import { ReactNode } from "react";

export type UserContextProps = {
  children: ReactNode;
};

export type User = {
  id: string;
  username: string;
};

export type PostInputSchema = {
  title: string;
  description: string;
  content: string;
};

export type UserContextValue = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isLoggedIn: boolean;
  uploadBlog: (blog: BlogSchema) => void;
};

export type BlogSchema = {
  id: number;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  likes: number;
  media: string;
  tagsId: number;
};

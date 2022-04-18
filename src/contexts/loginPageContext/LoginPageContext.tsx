import { createContext } from "react";

export type LoginContext = {
  email: string;
  password: string;
  secondPassword?: string;
  passwordCorrupted?: boolean;
  setEmail?: (email: string) => void;
  setPassword?: (password: string) => void;
  setSecondPassword?: (password: string) => void;
  setPasswordCorrupted?: (passwordCorrupted: boolean) => void;
};

const defaultValue: LoginContext = {
  email: "",
  password: "",
  secondPassword: "",
  passwordCorrupted: false,
};

const context = createContext(defaultValue);

export default context;

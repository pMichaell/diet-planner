import LoginPageContext, { LoginContext } from "./LoginPageContext";
import { ReactNode, useEffect, useReducer } from "react";

type ACTIONTYPE =
  | { type: "setEmail"; payload: string }
  | { type: "setPassword"; payload: string }
  | { type: "setSecondPassword"; payload: string }
  | { type: "setPasswordCorrupted"; payload: boolean };

const reducer = (state: LoginContext, action: ACTIONTYPE) => {
  switch (action.type) {
    case "setEmail":
      return {
        ...state,
        email: action.payload,
      };
    case "setPassword":
      return {
        ...state,
        password: action.payload,
      };
    case "setSecondPassword":
      return {
        ...state,
        secondPassword: action.payload,
      };
    case "setPasswordCorrupted":
      return {
        ...state,
        passwordCorrupted: action.payload,
      };
  }
};

const LoginPageContextProvider = ({ children }: { children: ReactNode }) => {
  const setEmail = (email: string) => {
    dispatch({
      type: "setEmail",
      payload: email,
    });
  };

  const setPassword = (password: string) => {
    dispatch({
      type: "setPassword",
      payload: password,
    });
  };

  const setSecondPassword = (secondPassword: string) => {
    dispatch({
      type: "setSecondPassword",
      payload: secondPassword,
    });
  };

  const setPasswordCorrupted = (passwordCorrupted: boolean) => {
    dispatch({
      type: "setPasswordCorrupted",
      payload: passwordCorrupted,
    });
  };

  const initialState: LoginContext = {
    email: "",
    password: "",
    secondPassword: "",
    passwordCorrupted: false,
    setEmail,
    setPassword,
    setSecondPassword,
    setPasswordCorrupted,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LoginPageContext.Provider value={state}>
      {children}
    </LoginPageContext.Provider>
  );
};

export default LoginPageContextProvider;

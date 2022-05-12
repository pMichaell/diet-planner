import LoginPageContext, { LoginContext } from "./LoginPageContext";
import { ReactNode, useReducer } from "react";

type ACTION_TYPE =
  | { type: "setEmail"; payload: string }
  | { type: "setPassword"; payload: string }
  | { type: "setSecondPassword"; payload: string }
  | { type: "setPasswordCorrupted"; payload: boolean };

const initialState: LoginContext = {
  email: "",
  password: "",
  secondPassword: "",
  passwordCorrupted: false,
};

const reducer = (state: LoginContext, action: ACTION_TYPE) => {
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
  const [state, dispatch] = useReducer(reducer, initialState);

  const setEmail = function setEmal(email: string) {
    dispatch({
      type: "setEmail",
      payload: email,
    });
  };

  const setPassword = function setPassword(password: string) {
    dispatch({
      type: "setPassword",
      payload: password,
    });
  };

  const setSecondPassword = function setSecondPassword(secondPassword: string) {
    dispatch({
      type: "setSecondPassword",
      payload: secondPassword,
    });
  };

  const setPasswordCorrupted = function setPasswordCorrupted(
    passwordCorrupted: boolean
  ) {
    dispatch({
      type: "setPasswordCorrupted",
      payload: passwordCorrupted,
    });
  };

  return (
    <LoginPageContext.Provider
      value={{
        ...state,
        setEmail,
        setPassword,
        setSecondPassword,
        setPasswordCorrupted,
      }}
    >
      {children}
    </LoginPageContext.Provider>
  );
};

export default LoginPageContextProvider;

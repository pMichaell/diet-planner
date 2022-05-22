import LoginPageContext, { LoginContext } from "./LoginPageContext";
import { ReactNode, useCallback, useReducer } from "react";
import validator from "validator";

type ACTION_TYPE =
  | { type: "setEmail"; email: string }
  | { type: "setPassword"; password: string }
  | { type: "setSecondPassword"; secondPassword: string }
  | { type: "setPasswordCorrupted"; passwordCorrupted: boolean };

const initialState: LoginContext = {
  email: "",
  password: "",
  secondPassword: "",
  emailCorrupted: false,
  passwordCorrupted: false,
};

const reducer = (state: LoginContext, action: ACTION_TYPE) => {
  switch (action.type) {
    case "setEmail":
      const isValid = validator.isEmail(action.email);
      return {
        ...state,
        emailCorrupted: isValid,
        email: action.email,
      };
    case "setPassword":
      const passwordCorrupted = action.password.length < 6;
      return {
        ...state,
        password: action.password,
        passwordCorrupted: passwordCorrupted,
      };
    case "setSecondPassword":
      return {
        ...state,
        secondPassword: action.secondPassword,
      };
    case "setPasswordCorrupted":
      return {
        ...state,
      };
  }
};

const LoginPageContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setEmail = useCallback((email: string) => {
    dispatch({
      type: "setEmail",
      email,
    });
  }, []);

  const setPassword = useCallback((password: string) => {
    dispatch({
      type: "setPassword",
      password,
    });
  }, []);

  const setSecondPassword = useCallback((secondPassword: string) => {
    dispatch({
      type: "setSecondPassword",
      secondPassword,
    });
  }, []);

  const setPasswordCorrupted = useCallback((passwordCorrupted: boolean) => {
    dispatch({
      type: "setPasswordCorrupted",
      passwordCorrupted,
    });
  }, []);

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

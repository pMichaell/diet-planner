import LoginPageContext, { LoginContext } from "./LoginPageContext";
import { ReactNode, useCallback, useReducer } from "react";
import validator from "validator";

type ACTION_TYPE =
  | { type: "setEmail"; email: string }
  | { type: "setPassword"; password: string }
  | { type: "setSecondPassword"; secondPassword: string };

const initialState: LoginContext = {
  email: "",
  password: "",
  secondPassword: "",
  emailCorrupted: true,
  passwordCorrupted: true,
  secondPasswordCorrupted: true,
};

const reducer = (state: LoginContext, action: ACTION_TYPE) => {
  switch (action.type) {
    case "setEmail":
      const isValid = validator.isEmail(action.email);
      return {
        ...state,
        emailCorrupted: !isValid,
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
      const secondPasswordCorrupted = action.secondPassword.length < 6;
      return {
        ...state,
        secondPassword: action.secondPassword,
        secondPasswordCorrupted: secondPasswordCorrupted,
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

  return (
    <LoginPageContext.Provider
      value={{
        ...state,
        setEmail,
        setPassword,
        setSecondPassword,
      }}
    >
      {children}
    </LoginPageContext.Provider>
  );
};
export default LoginPageContextProvider;

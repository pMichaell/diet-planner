import classes from "./LoginContainer.module.css";
import { motion } from "framer-motion";
import PasswordInput from "../passwordInput/PasswordInput";
import EmailInput from "../emailInput/EmailInput";
import { userValidationVariants } from "../../../../framerVariants";
import { auth } from "../../../../firebase/Firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FormEvent, useContext, useState } from "react";
import LoginPageContext from "../../../../contexts/loginPageContext/LoginPageContext";
import clsx from "clsx";

const LoginContainer = () => {
  const { email, password } = useContext(LoginPageContext);
  const [loginError, setLoginError] = useState(false);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onFormSubmission = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signInWithEmailAndPassword(email, password);
    await displayLoginError();
    console.log(loginError);
  };

  const displayLoginError = async () => {
    setLoginError(true);
    setTimeout(() => {
      setLoginError(false);
    }, 1000);
  };

  return (
    <motion.form
      className={classes.loginSection}
      variants={userValidationVariants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      onSubmit={onFormSubmission}
    >
      <div>
        <motion.h4>Email</motion.h4>
        <EmailInput />
      </div>
      <div>
        <motion.h4>Password</motion.h4>
        <PasswordInput />
      </div>
      <motion.button
        className={clsx(classes.logInButton, loginError && classes.loginError)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <h4>Log In</h4>
      </motion.button>
    </motion.form>
  );
};

export default LoginContainer;

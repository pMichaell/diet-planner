import { motion } from "framer-motion";
import classes from "./RegisterContainer.module.css";
import EmailInput from "../emailInput/EmailInput";
import PasswordInput from "../passwordInput/PasswordInput";
import { userValidationVariants } from "../../../../framerVariants";
import { FormEvent, useContext, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase/Firebase";
import LoginPageContext from "../../../../contexts/loginPageContext/LoginPageContext";

const RegisterContainer = () => {
  const { email, password, secondPassword, setPasswordCorrupted } =
    useContext(LoginPageContext);

  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const onFormSubmission = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== secondPassword) {
      setPasswordCorrupted?.(true);
      return;
    }

    await createUserWithEmailAndPassword(email, password);
  };

  return (
    <motion.form
      className={classes.registerSection}
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
      <div>
        <motion.h4>Repeat Password</motion.h4>
        <PasswordInput isSecondPassword />
      </div>
      <motion.button
        className={classes.registerButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <h4>Register</h4>
      </motion.button>
    </motion.form>
  );
};

export default RegisterContainer;

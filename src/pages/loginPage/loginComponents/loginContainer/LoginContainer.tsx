import classes from "./LoginContainer.module.css";
import { motion } from "framer-motion";
import PasswordInput from "../passwordInput/PasswordInput";
import EmailInput from "../emailInput/EmailInput";
import { userValidationVariants } from "../../../../framerVariants";
import { auth } from "../../../../firebase/Firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const getEmailInput = (input: string) => {
    setEmail(input);
  };

  const getPasswordInput = (input: string) => {
    setPassword(input);
  };

  return (
    <motion.form
      className={classes.loginSection}
      variants={userValidationVariants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      onSubmit={async (event) => {
        event.preventDefault();
        await signInWithEmailAndPassword(email, password);
      }}
    >
      <div>
        <motion.h4>Email</motion.h4>
        <EmailInput getEmailInput={getEmailInput} />
      </div>
      <div>
        <motion.h4>Password</motion.h4>
        <PasswordInput getPasswordInput={getPasswordInput} />
      </div>
      <motion.button
        className={classes.logInButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <h4>Log In</h4>
      </motion.button>
    </motion.form>
  );
};

export default LoginContainer;

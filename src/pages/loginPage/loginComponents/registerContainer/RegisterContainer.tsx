import { motion } from "framer-motion";
import classes from "./RegisterContainer.module.css";
import EmailInput from "../emailInput/EmailInput";
import PasswordInput from "../passwordInput/PasswordInput";
import { userValidationVariants } from "../../../../framerVariants";
import { useState } from "react";

const RegisterContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  const getEmailInput = (input: string) => {
    setEmail(input);
  };

  const getPasswordInput = (input: string) => {
    setPassword(input);
  };

  const getSecondPasswordInput = (input: string) => {
    setSecondPassword(input);
  };

  return (
    <motion.form
      className={classes.registerSection}
      variants={userValidationVariants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
    >
      <div>
        <motion.h4>Email</motion.h4>
        <EmailInput getEmailInput={getEmailInput} />
      </div>
      <div>
        <motion.h4>Password</motion.h4>
        <PasswordInput getPasswordInput={getPasswordInput} />
      </div>
      <div>
        <motion.h4>Repeat Password</motion.h4>
        <PasswordInput getPasswordInput={getSecondPasswordInput} />
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

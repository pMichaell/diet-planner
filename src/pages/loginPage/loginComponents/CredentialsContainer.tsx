import classes from "../LoginPage.module.css";
import { Fragment } from "react";
import { motion } from "framer-motion";
import PasswordInput from "../animatedInput/PasswordInput";

const CredentialsContainer = () => {
  return (
    <Fragment>
      <motion.h4>Username or Email</motion.h4>
      <motion.input />
      <motion.h4>Password</motion.h4>
      <PasswordInput />
    </Fragment>
  );
};

export default CredentialsContainer;

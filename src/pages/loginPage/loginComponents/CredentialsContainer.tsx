import classes from "../LoginPage.module.css";
import { Fragment } from "react";
import { motion } from "framer-motion";

const CredentialsContainer = () => {
  return (
    <Fragment>
      <motion.h4>Username or Email</motion.h4>
      <motion.input />
      <motion.h4>Password</motion.h4>
      <motion.input />
    </Fragment>
  );
};

export default CredentialsContainer;

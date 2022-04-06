import classes from "../LoginPage.module.css";
import { Fragment } from "react";
import { motion } from "framer-motion";

const LoginBreak = () => {
  return (
    <Fragment>
      <motion.div className={classes.orDiv}>
        <hr />
        or
        <hr />
      </motion.div>
    </Fragment>
  );
};

export default LoginBreak;

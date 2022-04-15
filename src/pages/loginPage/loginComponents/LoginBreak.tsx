import classes from "../LoginPage.module.css";
import { motion } from "framer-motion";

const LoginBreak = () => {
  return (
    <motion.section className={classes.orDiv}>
      <hr />
      or
      <hr />
    </motion.section>
  );
};

export default LoginBreak;

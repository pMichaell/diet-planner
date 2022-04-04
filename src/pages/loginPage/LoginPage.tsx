import { motion } from "framer-motion";
import classes from "./LoginPage.module.css";
import clsx from "clsx";

const containerVariants = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
  },
  exit: {
    x: "-100vw",
  },
};

const LoginPage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      className={clsx("fillParent", classes.loginPage)}
    >
      <input />
      <input />
      <input />
    </motion.div>
  );
};

export default LoginPage;

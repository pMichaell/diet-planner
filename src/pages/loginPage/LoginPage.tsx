import { motion } from "framer-motion";
import classes from "./LoginPage.module.css";
import clsx from "clsx";
import AnimatedPage from "../../components/AnimatedPage";

const LoginPage = () => {
  return (
    <AnimatedPage className={clsx("fillParent", classes.loginPage)}>
      <motion.input type={"text"} />
      <motion.input type={"password"} />
    </AnimatedPage>
  );
};

export default LoginPage;

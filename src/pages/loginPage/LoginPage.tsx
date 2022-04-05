import { motion } from "framer-motion";
import classes from "./LoginPage.module.css";
import clsx from "clsx";
import AnimatedPage from "../../components/AnimatedPage";

const LoginPage = () => {
  return (
    <AnimatedPage className={clsx("fillParent", classes.loginPage)}>
      <input />
      <input />
    </AnimatedPage>
  );
};

export default LoginPage;

import { motion } from "framer-motion";
import classes from "./LoginPage.module.css";
import clsx from "clsx";
import AnimatedPage from "../../components/AnimatedPage";
import ProvidersContainer from "./loginComponents/providersContainer/ProvidersContainer";
import LoginBreak from "./loginComponents/LoginBreak";
import CredentialsContainer from "./loginComponents/CredentialsContainer";
import LoginContainer from "./loginComponents/loginContainer/LoginContainer";

const loginVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
  },
};

const LoginPage = () => {
  return (
    <AnimatedPage className={clsx("fillParent", classes.loginPage)}>
      <motion.div
        className={classes.loginContainer}
        variants={loginVariants}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
      >
        <ProvidersContainer />
        <LoginBreak />
        <LoginContainer />
      </motion.div>
    </AnimatedPage>
  );
};

export default LoginPage;

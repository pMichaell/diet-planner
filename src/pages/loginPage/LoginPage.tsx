import { motion } from "framer-motion";
import classes from "./LoginPage.module.css";
import clsx from "clsx";
import AnimatedPage from "../../components/AnimatedPage";
import { FacebookLogo, GithubLogo, GoogleLogo } from "phosphor-react";

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
        <motion.button className={classes.providerButton}>
          <GoogleLogo size={"16px"} />
          <h4>Sign in with Google</h4>
        </motion.button>
        <motion.button className={classes.providerButton}>
          <GithubLogo size={"16px"} />
          <h4>Sign in with Github</h4>
        </motion.button>
        <motion.button className={classes.providerButton}>
          <FacebookLogo size={"16px"} />
          <h4>Sign in with Facebook</h4>
        </motion.button>
        <motion.div className={classes.orDiv}>
          <hr />
          or
          <hr />
        </motion.div>
        <motion.h4>Username or Email</motion.h4>
        <motion.input />
        <motion.h4>Password</motion.h4>
        <motion.input />
      </motion.div>
    </AnimatedPage>
  );
};

export default LoginPage;

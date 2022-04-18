import { AnimatePresence, motion } from "framer-motion";
import classes from "./LoginPage.module.css";
import clsx from "clsx";
import AnimatedPage from "../../components/animatedPage/AnimatedPage";
import ProvidersContainer from "./loginComponents/providersContainer/ProvidersContainer";
import LoginBreak from "./loginComponents/LoginBreak";
import LoginContainer from "./loginComponents/loginContainer/LoginContainer";
import { useEffect, useState } from "react";
import RegisterContainer from "./loginComponents/registerContainer/RegisterContainer";
import LoginPageContextProvider from "../../contexts/loginPageContext/LoginPageContextProvider";
import { useParams, useSearchParams } from "react-router-dom";

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
  const [isLogin, setIsLogin] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("register")) {
      setIsLogin(false);
      return;
    }
    setIsLogin(true);
  }, [searchParams]);

  const onLoginModeSwitch = () => {
    if (searchParams.get("register")) {
      setSearchParams({});
      return;
    }
    setSearchParams({ register: "true" });
  };

  return (
    <AnimatedPage className={clsx("fillParent", classes.loginPage)}>
      <motion.div className={classes.loginContainer}>
        <motion.section
          className={classes.loginSection}
          variants={loginVariants}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
        >
          <ProvidersContainer />
          <LoginBreak />
          <LoginPageContextProvider>
            <AnimatePresence>
              {isLogin ? <LoginContainer /> : <RegisterContainer />}
            </AnimatePresence>
          </LoginPageContextProvider>
        </motion.section>
        <section className={classes.helpSection}>
          <p className={classes.helpParagraph}>
            Forgot Your Password?
            <span>Click here</span>
          </p>
          <p className={classes.helpParagraph}>
            {isLogin ? "Not a member yet?" : "Already a member?"}
            <motion.span onClick={onLoginModeSwitch}>
              {isLogin ? "Sign Up" : "Log In"}
            </motion.span>
          </p>
        </section>
      </motion.div>
    </AnimatedPage>
  );
};

export default LoginPage;

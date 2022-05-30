import { AnimatePresence, motion } from "framer-motion";
import classes from "./LoginPage.module.css";
import clsx from "clsx";
import AnimatedPage from "../../components/animatedPage/AnimatedPage";
import ProvidersContainer from "./loginComponents/providersContainer/ProvidersContainer";
import LoginBreak from "./loginComponents/LoginBreak";
import LoginContainer from "./loginComponents/loginContainer/LoginContainer";
import { useContext, useEffect, useState } from "react";
import RegisterContainer from "./loginComponents/registerContainer/RegisterContainer";

import { useSearchParams } from "react-router-dom";
import LoginPageContext from "../../contexts/loginPageContext/LoginPageContext";

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
  const { setEmail, setPassword, setSecondPassword } =
    useContext(LoginPageContext);

  useEffect(() => {
    setEmail?.("");
    setPassword?.("");
    setSecondPassword?.("");
    if (searchParams.get("register")) {
      setIsLogin(false);
      return;
    }
    setIsLogin(true);
  }, [searchParams, setEmail, setPassword, setSecondPassword]);

  const onLoginModeSwitch = () => {
    if (searchParams.get("register")) {
      setSearchParams({});
      return;
    }
    setSearchParams({ register: "true" });
  };

  return (
    <AnimatedPage
      className={clsx("fillParent", "centerContents", classes.loginPage)}
    >
      <motion.div className={clsx(classes.loginContainer)}>
        <motion.section
          className={classes.loginSection}
          variants={loginVariants}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
        >
          <ProvidersContainer className={classes.providersContainer} />
          <LoginBreak className={classes.loginBreak} />
          <AnimatePresence>
            {isLogin ? <LoginContainer /> : <RegisterContainer />}
          </AnimatePresence>
        </motion.section>
        <section className={classes.helpSection}>
          <p className={classes.helpParagraph}>
            Forgot Your Password?
            <button>Reset Password</button>
          </p>
          <p className={classes.helpParagraph}>
            {isLogin ? "Not a member yet?" : "Already a member?"}
            <motion.button onClick={onLoginModeSwitch}>
              {isLogin ? "Sign Up" : "Log In"}
            </motion.button>
          </p>
        </section>
      </motion.div>
    </AnimatedPage>
  );
};

export default LoginPage;

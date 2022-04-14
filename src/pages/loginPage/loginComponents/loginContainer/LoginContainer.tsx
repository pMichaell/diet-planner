import classes from "./LoginContainer.module.css";
import { motion } from "framer-motion";
import PasswordInput from "../passwordInput/PasswordInput";
import EmailInput from "../emailInput/EmailInput";

const LoginContainer = () => {
  return (
    <section className={classes.loginSection}>
      <div>
        <motion.h4>Email</motion.h4>
        <EmailInput />
      </div>
      <div>
        <motion.h4>Password</motion.h4>
        <PasswordInput />
      </div>
      <motion.button className={classes.logInButton}>Log In</motion.button>
    </section>
  );
};

export default LoginContainer;

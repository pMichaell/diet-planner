import classes from "./LoginContainer.module.css";
import { motion } from "framer-motion";
import PasswordInput from "../passwordInput/PasswordInput";
import EmailInput from "../emailInput/EmailInput";
import { userValidationVariants } from "../../../../framerVariants";

const LoginContainer = () => {
  return (
    <motion.form
      className={classes.loginSection}
      variants={userValidationVariants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
    >
      <div>
        <motion.h4>Email</motion.h4>
        <EmailInput />
      </div>
      <div>
        <motion.h4>Password</motion.h4>
        <PasswordInput />
      </div>
      <motion.button
        className={classes.logInButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <h4>Log In</h4>
      </motion.button>
    </motion.form>
  );
};

export default LoginContainer;

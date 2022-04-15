import { motion } from "framer-motion";
import classes from "./RegisterContainer.module.css";
import EmailInput from "../emailInput/EmailInput";
import PasswordInput from "../passwordInput/PasswordInput";
import { userValidationVariants } from "../../../../framerVariants";

const RegisterContainer = () => {
  return (
    <motion.section
      className={classes.registerSection}
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
      <div>
        <motion.h4>Repeat Password</motion.h4>
        <PasswordInput />
      </div>
      <motion.button
        className={classes.registerButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <h4>Register</h4>
      </motion.button>
    </motion.section>
  );
};

export default RegisterContainer;

import classes from "./LoginContainer.module.css";
import { motion } from "framer-motion";
import PasswordInput from "../passwordInput/PasswordInput";
import EmailInput from "../emailInput/EmailInput";
import { userValidationVariants } from "../../../../framerVariants";
import { FormEvent, useContext, useState } from "react";
import LoginPageContext from "../../../../contexts/loginPageContext/LoginPageContext";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router-dom";
import { Spinner } from "phosphor-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase/Firebase";

const LoginContainer = () => {
  const { email, password } = useContext(LoginPageContext);
  const [loginError, setLoginError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onFormSubmission = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        displayLoginError();
      })
      .finally(() => setIsLoading(false));
  };

  const displayLoginError = () => {
    setLoginError(true);
    setTimeout(() => {
      setLoginError(false);
    }, 2000);
  };

  return (
    <motion.form
      className={classes.loginSection}
      variants={userValidationVariants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      onSubmit={onFormSubmission}
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
        className={clsx(classes.logInButton, loginError && classes.loginError)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {!isLoading ? (
          <h4>Log In</h4>
        ) : (
          <Spinner size={24}>
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="5s"
              from="0 0 0"
              to="360 0 0"
              repeatCount="indefinite"
            />
          </Spinner>
        )}
      </motion.button>
    </motion.form>
  );
};

export default LoginContainer;

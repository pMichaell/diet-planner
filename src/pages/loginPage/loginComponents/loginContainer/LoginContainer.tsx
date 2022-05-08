import classes from "./LoginContainer.module.css";
import { motion, useAnimation } from "framer-motion";
import PasswordInput from "../passwordInput/PasswordInput";
import EmailInput from "../emailInput/EmailInput";
import { validationVariants } from "../../../../framerVariants";
import { FormEvent, useContext, useState } from "react";
import LoginPageContext from "../../../../contexts/loginPageContext/LoginPageContext";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { Spinner } from "phosphor-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase/Firebase";

const LoginContainer = () => {
  const { email, password } = useContext(LoginPageContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const controls = useAnimation();

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

  const displayLoginError = async () => {
    await controls.start({
      x: [null, 20, -30, 30, 0],
      transition: {
        type: "spring",
        duration: 0.4,
        bounce: 1,
      },
    });
  };

  return (
    <motion.form
      className={classes.loginSection}
      variants={validationVariants}
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
        className={clsx(classes.logInButton)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={controls}
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

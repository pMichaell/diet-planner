import { motion, useAnimation } from "framer-motion";
import classes from "./RegisterContainer.module.css";
import EmailInput from "../emailInput/EmailInput";
import PasswordInput from "../passwordInput/PasswordInput";
import { validationVariants } from "../../../../framerVariants";
import { FormEvent, useContext, useState } from "react";
import { auth } from "../../../../firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import LoginPageContext from "../../../../contexts/loginPageContext/LoginPageContext";
import { Spinner } from "phosphor-react";
import { useSearchParams } from "react-router-dom";
import ModalContext from "../../../../contexts/modalContext/ModalContext";
import { createUser } from "../../../../firebase/FirestoreFunctions";

const RegisterContainer = () => {
  const { email, password, secondPassword, setPasswordCorrupted } =
    useContext(LoginPageContext);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { openModal, setModalText } = useContext(ModalContext);
  const controls = useAnimation();

  const onFormSubmission = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== secondPassword) {
      setPasswordCorrupted?.(true);
      return;
    }

    setIsLoading(true);
    createUserWithEmailAndPassword(auth, "1134@gmail.com", "123456")
      .then(async ({ user }) => {
        setSearchParams({});
        signOut(auth).then(() => {});
        openModal?.();
        setModalText?.("Account created succesfully");
        await sendEmailVerification(user);
        await createUser(user);
      })
      .catch(() => {
        displayRegisterError();
      })
      .finally(() => setIsLoading(false));
  };

  const displayRegisterError = async () => {
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
      className={classes.registerSection}
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
      <div>
        <motion.h4>Repeat Password</motion.h4>
        <PasswordInput isSecondPassword />
      </div>
      <motion.button
        className={classes.registerButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={controls}
      >
        {!isLoading ? (
          <h4>Register</h4>
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

export default RegisterContainer;

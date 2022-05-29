import { motion, useAnimation } from "framer-motion";
import classes from "./RegisterContainer.module.css";
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
import AnimatedInput from "../animatedInput/AnimatedInput";
import NotificationModal from "../../../../components/modal/modalVariants/NotificationModal";

const RegisterContainer = () => {
  const {
    email,
    setEmail,
    emailCorrupted,
    password,
    setPassword,
    setSecondPassword,
    secondPassword,
    passwordCorrupted,
    secondPasswordCorrupted,
  } = useContext(LoginPageContext);
  const [isLoading, setIsLoading] = useState(false);
  const [_, setSearchParams] = useSearchParams();
  const { openModal, setModalChildren, closeModal } = useContext(ModalContext);
  const controls = useAnimation();

  const onFormSubmission = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password.length === 0 || password !== secondPassword) {
      await displayRegisterError();
      return;
    }

    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        setSearchParams({});
        signOut(auth).then(() => {});
        openModal?.();
        setModalChildren?.(
          <NotificationModal
            notificationText={"Account created successfully"}
            onClick={() => closeModal?.()}
          />
        );
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
        <label htmlFor="email" className={classes.inputLabel}>
          Email
        </label>
        <AnimatedInput
          value={email}
          setter={setEmail}
          valueIncorrect={emailCorrupted}
          name={"email"}
          id={"email"}
        />
      </div>
      <div>
        <label htmlFor={"password"} className={classes.inputLabel}>
          Password
        </label>
        <AnimatedInput
          value={password}
          setter={setPassword}
          name={"password"}
          id={"password"}
          valueIncorrect={passwordCorrupted}
          minCharacters={6}
          inputType={"password"}
        />
      </div>
      <div>
        <label htmlFor={"confirmPassword"} className={classes.inputLabel}>
          Confirm Password
        </label>
        <AnimatedInput
          value={secondPassword}
          setter={setSecondPassword}
          name={"confirmPassword"}
          id={"confirmPassword"}
          valueIncorrect={secondPasswordCorrupted}
          minCharacters={6}
          inputType={"password"}
        />
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

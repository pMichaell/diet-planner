import { motion, useAnimation } from "framer-motion";
import classes from "./PasswordInput.module.css";
import { useContext, useEffect, useState } from "react";
import { Check } from "phosphor-react";
import { checkMarkGreen } from "../../../../utils/CssColors";
import clsx from "clsx";
import LoginPageContext from "../../../../contexts/loginPageContext/LoginPageContext";

const minLength = 6;

const PasswordInput = ({
  isSecondPassword = false,
}: {
  isSecondPassword?: boolean;
}) => {
  const [value, setValue] = useState<string>("");
  const charactersRemaining = minLength - value?.length;
  const controls = useAnimation();
  const {
    setPassword,
    setSecondPassword,
    passwordCorrupted,
    setPasswordCorrupted,
  } = useContext(LoginPageContext);

  useEffect(() => {
    controls.start({
      scale: 1,
      transition: {
        type: "spring",
        velocity: 4,
      },
    });
  }, [value.length]);

  const getPasswordValue = (value: string) => {
    !isSecondPassword ? setPassword?.(value) : setSecondPassword?.(value);
  };

  return (
    <motion.div
      className={clsx(
        classes.passwordContainer,
        passwordCorrupted && classes.wrong
      )}
    >
      <input
        type="password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => {
          getPasswordValue(value.trim());
        }}
        onFocus={() => setPasswordCorrupted?.(false)}
        className={clsx(
          classes.passwordInput,
          passwordCorrupted && classes.wrong
        )}
      />

      {charactersRemaining > 0 ? (
        <motion.span animate={controls} className={classes.animatedSpan}>
          {charactersRemaining}
        </motion.span>
      ) : (
        <motion.span
          initial={{ size: "1.75rem" }}
          animate={controls}
          className={classes.animatedSpan}
        >
          <Check size={"40px"} color={checkMarkGreen} />
        </motion.span>
      )}
    </motion.div>
  );
};

export default PasswordInput;

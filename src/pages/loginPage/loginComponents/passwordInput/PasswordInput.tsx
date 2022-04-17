import { motion, useAnimation } from "framer-motion";
import classes from "./PasswordInput.module.css";
import { useEffect, useState } from "react";
import { Check } from "phosphor-react";
import { checkMarkGreen } from "../../../../utils/CssColors";

const minLength = 6;

const PasswordInput = ({
  getPasswordInput,
}: {
  getPasswordInput: (input: string) => void;
}) => {
  const [value, setValue] = useState<string>("");
  const charactersRemaining = minLength - value?.length;
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: 1,
      transition: {
        type: "spring",
        velocity: 4,
      },
    });
  }, [value.length]);

  return (
    <motion.div className={classes.passwordContainer}>
      <input
        type="password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => getPasswordInput(value)}
        className={classes.passwordInput}
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
          <Check size={"2.5rem"} color={checkMarkGreen} />
        </motion.span>
      )}
    </motion.div>
  );
};

export default PasswordInput;

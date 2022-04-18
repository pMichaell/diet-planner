import classes from "./EmailInput.module.css";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Check, X } from "phosphor-react";
import { checkMarkGreen, creamyGreen } from "../../../../utils/CssColors";

const EmailInput = ({
  getEmailInput,
}: {
  getEmailInput: (input: string) => void;
}) => {
  const [value, setValue] = useState<string>("");
  const emailCorrect = value.includes("@") && value.includes(".");
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: 1,
      transition: {
        type: "spring",
        velocity: 4,
      },
    });
    console.log(emailCorrect);
  }, [value.length]);

  return (
    <div className={classes.emailContainer}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => getEmailInput(value)}
        className={classes.emailInput}
      />

      {!emailCorrect ? (
        <motion.span animate={controls} className={classes.animatedSpan}>
          <X size={"40px"} color={"white"} />
        </motion.span>
      ) : (
        <motion.span animate={controls} className={classes.animatedSpan}>
          <Check size={"40px"} color={checkMarkGreen} />
        </motion.span>
      )}
    </div>
  );
};

export default EmailInput;

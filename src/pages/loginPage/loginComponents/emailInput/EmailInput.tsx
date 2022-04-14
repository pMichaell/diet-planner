import classes from "./EmailInput.module.css";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Check, X } from "phosphor-react";
import { checkMarkGreen, creamyGreen } from "../../../../utils/CssColors";

const EmailInput = () => {
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
        className={classes.emailInput}
      />

      {!emailCorrect ? (
        <motion.span animate={controls} className={classes.animatedSpan}>
          <X size={"2.5rem"} color={creamyGreen} />
        </motion.span>
      ) : (
        <motion.span animate={controls} className={classes.animatedSpan}>
          <Check size={"2.5rem"} color={checkMarkGreen} />
        </motion.span>
      )}
    </div>
  );
};

export default EmailInput;

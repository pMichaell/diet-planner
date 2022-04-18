import classes from "./EmailInput.module.css";
import { useContext, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Check, X } from "phosphor-react";
import { checkMarkGreen, creamyGreen } from "../../../../utils/CssColors";
import LoginPageContext from "../../../../contexts/loginPageContext/LoginPageContext";

const EmailInput = () => {
  const [value, setValue] = useState<string>("");
  const emailCorrect = value.includes("@") && value.includes(".");
  const controls = useAnimation();
  const { setEmail } = useContext(LoginPageContext);

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
    <div className={classes.emailContainer}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => {
          setEmail?.(value.trim());
          console.log(value);
        }}
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

import classes from "./AnimatedInput.module.css";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Check, X } from "phosphor-react";
import clsx from "clsx";

type InputProps = {
  value: string;
  setter?: (userInput: string) => void;
  valueCorrect?: boolean;
  minCharacters?: number;
  name: string;
  id: string;
};

const AnimatedInput = ({
  value,
  setter,
  valueCorrect,
  minCharacters,
  name,
  id,
}: InputProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: 1,
      transition: {
        type: "spring",
        velocity: 4,
      },
    });
  }, [value, controls]);

  console.log(minCharacters);

  return (
    <div className={classes.emailContainer}>
      <input
        id={id}
        name={name}
        value={value}
        onChange={(e) => setter?.(e.target.value)}
        onBlur={() => {
          setter?.(value.trim());
        }}
        className={classes.emailInput}
      />

      {!valueCorrect ? (
        <motion.span
          animate={controls}
          className={clsx("fs700", classes.animatedSpan)}
        >
          {minCharacters === undefined ? (
            <X size={"40px"} color={"white"} />
          ) : (
            <motion.span
              animate={controls}
              className={clsx("fs500", classes.animatedSpan)}
            >
              {minCharacters! - value.length}
            </motion.span>
          )}
        </motion.span>
      ) : (
        <motion.span
          animate={controls}
          className={clsx("fs700", classes.animatedSpan)}
        >
          <Check size={"40px"} className={"clrCheckmark"} />
        </motion.span>
      )}
    </div>
  );
};

export default AnimatedInput;

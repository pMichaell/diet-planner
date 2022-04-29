import { motion } from "framer-motion";
import classes from "./MealNamer.module.css";
import clsx from "clsx";
import { log } from "util";
import { useEffect, useRef, useState } from "react";

const formVariants = {
  initial: {
    height: 0,
    width: 0,
    opacity: 0,
  },
  animate: {
    height: "100%",
    width: "100%",
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const mealNameVariants = {
  initial: {
    y: "-100vh",
  },
  animate: {
    y: "0",
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.3,
    },
  },
};

let filled: boolean = false;

const MealNameInput = ({ mealNumber }: { mealNumber: number }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    filled = inputValue !== "" && true;
  });

  return (
    <motion.div
      key={mealNumber}
      variants={mealNameVariants}
      className={clsx(classes.mealNameInput)}
    >
      <label htmlFor={`meal#${mealNumber}`} className={"fw500"}>
        Meal #{mealNumber}
      </label>
      <input
        type="text"
        id={`meal#${mealNumber}`}
        className={clsx("txtAlgCenter", "clrGreen")}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </motion.div>
  );
};

const MealNamer = ({
  mealCount,
  setNamingSectionFilled,
}: {
  mealCount: number;
  setNamingSectionFilled: (filled: boolean) => void;
}) => {
  return (
    <motion.form
      className={classes.container}
      variants={formVariants}
      initial={"initial"}
      animate={"animate"}
      onChange={() =>
        filled ? setNamingSectionFilled(true) : setNamingSectionFilled(false)
      }
    >
      <motion.p variants={mealNameVariants} className={clsx("fw500")}>
        Name your meals!
      </motion.p>
      {Array.from({ length: mealCount }, (_, index) => (
        <MealNameInput mealNumber={index + 1} key={index} />
      ))}
    </motion.form>
  );
};

export default MealNamer;

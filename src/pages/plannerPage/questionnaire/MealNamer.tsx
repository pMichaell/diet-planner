import { motion } from "framer-motion";
import classes from "./MealNamer.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";

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
  exit: {
    x: "-100vw",
    opacity: 0,
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

const MealNamer = ({
  mealCount,
  setFormFilled,
  collectInputsData,
}: {
  mealCount: number;
  setFormFilled: (filled: boolean) => void;
  collectInputsData: (data: string[]) => void;
}) => {
  const [inputValues, setInputValues] = useState<Array<string>>(
    new Array(mealCount).fill("")
  );

  useEffect(() => {
    if (inputValues.includes("")) {
      setFormFilled(false);
      return;
    }

    setFormFilled(true);
    collectInputsData(inputValues);
  }, [collectInputsData, inputValues, setFormFilled]);

  return (
    <motion.div className={classes.container}>
      <motion.p
        variants={mealNameVariants}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        className={clsx("fw500")}
      >
        {mealCount > 1 ? "Name your meals!" : "Name your meal!"}
      </motion.p>
      <motion.form
        className={clsx(classes.form, mealCount < 3 && classes.fewMeals)}
        variants={formVariants}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
      >
        {Array.from({ length: mealCount }, (_, index) => (
          <motion.div
            key={index}
            variants={mealNameVariants}
            className={clsx(classes.mealNameInput)}
          >
            <label htmlFor={`meal#${index}`} className={"fw500"}>
              Meal #{index + 1}
            </label>
            <input
              type="text"
              id={`meal#${index}`}
              className={clsx("txtAlgCenter", "clrGreen")}
              onChange={(event) => {
                let newArr = [...inputValues];
                newArr[index] = event.target.value;
                setInputValues(newArr);
              }}
            />
          </motion.div>
        ))}
      </motion.form>
    </motion.div>
  );
};

export default MealNamer;

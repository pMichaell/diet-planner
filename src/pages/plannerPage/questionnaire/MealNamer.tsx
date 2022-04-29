import { motion } from "framer-motion";
import classes from "./MealNamer.module.css";
import clsx from "clsx";

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

const MealNameInput = ({ mealNumber }: { mealNumber: number }) => {
  return (
    <motion.div
      key={mealNumber}
      variants={mealNameVariants}
      className={clsx(classes.mealNameInput)}
    >
      <label htmlFor={`meal#${mealNumber}`}>meal#{mealNumber}</label>
      <input type="text" id={`meal#${mealNumber}`} />
    </motion.div>
  );
};

const MealNamer = ({ mealCount }: { mealCount: number }) => {
  return (
    <motion.form
      className={classes.container}
      variants={formVariants}
      initial={"initial"}
      animate={"animate"}
    >
      {new Array(mealCount).map((_, index) => (
        <MealNameInput mealNumber={index} />
      ))}
    </motion.form>
  );
};

export default MealNamer;

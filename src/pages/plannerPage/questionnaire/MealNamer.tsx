import { motion } from "framer-motion";
import classes from "./MealNamer.module.css";

const formVariants = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    height: "100%",
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
    <motion.div key={mealNumber} variants={mealNameVariants}>
      <label htmlFor={`meal#${mealNumber}`}>meal#{mealNumber}</label>
      <input type="text" id={`meal#${mealNumber}`} />
    </motion.div>
  );
};

const MealNamer = ({ mealCount }: { mealCount: number }) => {
  return (
    <motion.form
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

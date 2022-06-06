import classes from "./MealArticle.module.css";
import { Meal } from "../../Models";
import { motion } from "framer-motion";
import { mealElementVariants } from "../../pages/plannerPage/mealPicker/MealPickerVariants";
import SpinnerImg from "../spinnerImg/SpinnerImg";
import clsx from "clsx";

type MealElementProps = {
  meal: Meal;
  articleIndex?: number;
  onClick?: (meal: Meal) => void;
  className?: string;
};

const MealElement = ({
  meal,
  articleIndex,
  onClick,
  className,
}: MealElementProps) => {
  return (
    <motion.button
      onClick={() => onClick?.(meal)}
      className={clsx(
        "curvedBorder",
        "backdropFilter2",
        "clrGreen",
        className,
        classes.pickerElement
      )}
      variants={mealElementVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      custom={articleIndex}
    >
      <SpinnerImg
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className={classes.imgContainer}
        imgClassName={classes.img}
      />
      <p className={clsx(classes.mealName)}>{meal.strMeal}</p>
    </motion.button>
  );
};

export default MealElement;

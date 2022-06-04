import classes from "./MealArticle.module.css";
import { Meal } from "../../Models";
import { motion } from "framer-motion";
import { mealElementVariants } from "../../pages/plannerPage/mealPicker/MealPickerVariants";
import SpinnerImg from "../spinnerImg/SpinnerImg";
import clsx from "clsx";

type MealPickerElementProps = {
  meal: Meal;
  articleIndex?: number;
  onClick: (idMeal: string) => void;
};

const MealPickerElement = ({
  meal,
  articleIndex,
  onClick,
}: MealPickerElementProps) => {
  return (
    <motion.button
      onClick={() => onClick(meal.idMeal)}
      className={clsx(
        "curvedBorder",
        "backdropFilter2",
        "clrGreen",
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

export default MealPickerElement;

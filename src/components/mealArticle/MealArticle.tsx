import classes from "./MealArticle.module.css";
import { Meal } from "../../Models";
import { motion } from "framer-motion";
import { mealElementVariants } from "../../pages/plannerPage/mealPicker/MealPickerVariants";
import SpinnerImg from "../spinnerImg/SpinnerImg";
import clsx from "clsx";

type MealArticleProps = {
  meal: Meal;
  articleIndex?: number;
};

const MealArticle = ({ meal, articleIndex }: MealArticleProps) => {
  return (
    <motion.article
      className={clsx("curvedBorder", "backdropFilter2", classes.mealArticle)}
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
    </motion.article>
  );
};

export default MealArticle;

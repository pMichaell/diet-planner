import classes from "./MealArticle.module.css";
import { Meal } from "../../Models";
import { motion } from "framer-motion";
import clsx from "clsx";

type MealArticleProps = {
  meal: Meal;
  className?: string;
};

const MealArticle = ({ meal, className }: MealArticleProps) => {
  return (
    <motion.article className={className}>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strMeal}</p>
    </motion.article>
  );
};

export default MealArticle;

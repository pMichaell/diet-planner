import { Meal } from "../../Models";
import { motion } from "framer-motion";
import { mealElementVariants } from "../../pages/plannerPage/mealPicker/MealPickerVariants";

type MealArticleProps = {
  meal: Meal;
  articleIndex?: number;
  className?: string;
};

const MealArticle = ({ meal, articleIndex, className }: MealArticleProps) => {
  return (
    <motion.article
      className={className}
      variants={mealElementVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      custom={articleIndex}
    >
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strMeal}</p>
    </motion.article>
  );
};

export default MealArticle;

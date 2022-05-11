import { motion } from "framer-motion";
import clsx from "clsx";
import { Weekday } from "../../../../../Models";

type MealElementProps = {
  mealName: string;
  weekday: Weekday;
  mealIndex: number;
  className?: string;
};

const MealElement = ({
  mealName,
  mealIndex,
  weekday,
  className,
}: MealElementProps) => {
  return (
    <motion.article
      className={clsx("curvedBorder", "centerContents", className)}
    >
      <label>{mealIndex}</label>
      <p>{mealName}</p>
    </motion.article>
  );
};

export default MealElement;

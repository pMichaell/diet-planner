import { motion } from "framer-motion";
import { useContext } from "react";
import PlanContext from "../../../../../contexts/planContext/PlanContext";
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
  const planContext = useContext(PlanContext);

  console.log(planContext[weekday]);

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

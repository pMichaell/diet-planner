import classes from "./PlannerElement.module.css";
import { motion } from "framer-motion";
import clsx from "clsx";
import MealElement from "../../../../components/mealArticle/MealElement";
import { Weekday } from "../../../../Models";
import { OnPlannerElementClick } from "../Planner";
import useMealContext from "../../../../hooks/use-meal-context";
import { Plus } from "phosphor-react";

type PlannerElementProps = {
  mealName: string;
  weekday: Weekday;
  mealIndex: number;
  onClick: OnPlannerElementClick;
  className?: string;
};

const PlannerElement = ({
  mealName,
  mealIndex,
  weekday,
  onClick,
}: PlannerElementProps) => {
  const { meal, mealRemove } = useMealContext(weekday, mealIndex);

  return (
    <motion.article
      className={clsx("centerContents", "clrGreen", classes.container)}
    >
      <p className={clsx("fw600", "fs500", classes.title)}>{mealName}</p>
      {!meal ? (
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          className={clsx("clrGreen", classes.cta)}
          onClick={() => onClick(weekday, mealIndex)}
        >
          <Plus size={"3em"} weight={"bold"} />
        </motion.button>
      ) : (
        <MealElement meal={meal} className={classes.mealElement} />
      )}
    </motion.article>
  );
};

export default PlannerElement;

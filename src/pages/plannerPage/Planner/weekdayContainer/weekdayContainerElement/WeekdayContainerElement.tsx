import classes from "./WeekdayContainerElement.module.css";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Weekday } from "../../../../../Models";
import { OnPlannerElementClick } from "../../Planner";
import useMealContext from "../../../../../hooks/use-meal-context";
import { Fragment } from "react";

type MealElementProps = {
  mealName: string;
  weekday: Weekday;
  mealIndex: number;
  onClick: OnPlannerElementClick;
  className?: string;
};

const WeekdayContainerElement = ({
  mealName,
  mealIndex,
  weekday,
  onClick,
}: MealElementProps) => {
  const { meal, mealRemove } = useMealContext(weekday, mealIndex);
  return (
    <motion.article
      className={clsx(
        "centerContents",
        "curvedBorder",
        "clrGreen",
        classes.container
      )}
    >
      <h4>{mealName}</h4>
      {!meal ? (
        <motion.button
          className={clsx("standardBorder", "clrGreen", classes.cta)}
          onClick={() => onClick(weekday, mealIndex)}
        >
          Add Meal
        </motion.button>
      ) : (
        <Fragment>
          <p>{meal.idMeal}</p>
          <p>{meal.strMeal}</p>
        </Fragment>
      )}
    </motion.article>
  );
};

export default WeekdayContainerElement;

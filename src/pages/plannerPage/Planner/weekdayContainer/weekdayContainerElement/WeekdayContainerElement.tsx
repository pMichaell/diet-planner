import { motion } from "framer-motion";
import clsx from "clsx";
import { Meal, Weekday } from "../../../../../Models";
import useMealContext from "../../../../../hooks/use-meal-context";
import { Fragment, useEffect } from "react";

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
  const { meal, mealSet, mealRemove } = useMealContext(weekday, mealIndex);

  const dummyMeal: Meal = {
    idMeal: Math.random() * 20,
    strMeal: "testMeal",
    strMealThumb: "XD",
  };

  useEffect(() => {
    console.log(meal);
    console.log("meal updated in useEffect");
  }, [meal]);

  return (
    <motion.article
      className={clsx("curvedBorder", "centerContents", className)}
    >
      <label>{mealIndex + 1}</label>
      <p>{mealName}</p>
      <button
        className={"curvedBorder"}
        onClick={() => {
          console.log("button clicked");
          mealSet(dummyMeal);
        }}
      >
        Click to add Meal
      </button>
      {meal && (
        <Fragment>
          <p>{meal.idMeal}</p>
          <p>{meal.strMeal}</p>
        </Fragment>
      )}
    </motion.article>
  );
};

export default MealElement;

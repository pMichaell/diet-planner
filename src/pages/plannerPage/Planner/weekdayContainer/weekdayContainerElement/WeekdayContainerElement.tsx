import classes from "./WeekdayContainerElement.module.css";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Meal, Weekday } from "../../../../../Models";
import useMealContext from "../../../../../hooks/use-meal-context";
import { Fragment, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

type MealElementProps = {
  mealName: string;
  weekday: Weekday;
  mealIndex: number;
  className?: string;
};

const MealElement = ({ mealName, mealIndex, weekday }: MealElementProps) => {
  const { meal, mealSet, mealRemove } = useMealContext(weekday, mealIndex);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

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
          onClick={() => {
            console.log("button clicked");
            setSearchParams({ name: weekday, mealIndex: mealIndex.toString() });
            console.log(searchParams.toString());
            navigate({
              pathname: "./picker",
              search: `?weekday=${weekday}&mealIndex=${mealIndex}`,
            });
          }}
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

export default MealElement;

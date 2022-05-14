import classes from "./WeekdayContainerElement.module.css";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Weekday } from "../../../../../Models";
import useMealContext from "../../../../../hooks/use-meal-context";
import { Fragment } from "react";
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
            navigate({
              pathname: "typePicker",
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

//              search: `?weekday=${weekday}&mealIndex=${mealIndex}`,

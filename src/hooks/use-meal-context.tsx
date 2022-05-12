import { Meal, Weekday } from "../Models";
import { useContext, useEffect, useState } from "react";
import MealsContext from "../contexts/mealsContext/MealsContext";

const useMealContext = (weekday: Weekday, mealIndex: number) => {
  const [meal, setMealState] = useState<Meal>();
  const ctx = useContext(MealsContext);

  useEffect(() => {
    console.log("meals in useMealContext useEffect\n" + ctx[weekday]);
    setMealState(ctx[weekday][mealIndex]);
    console.log("useEffect run in use mealContext");
  }, [ctx, weekday, mealIndex]);

  const mealSet = function mealSet(meal: Meal) {
    ctx.setMeal?.(weekday, mealIndex, meal);
    console.log("mealSet run in use MealContext");
  };

  const mealRemove = function mealRemove() {
    ctx.removeMeal?.(weekday, mealIndex);
  };

  return {
    meal,
    mealSet,
    mealRemove,
  };
};

export default useMealContext;

import { Meal, Weekday } from "../Models";
import { useContext, useEffect, useState } from "react";
import MealsContext from "../contexts/mealsContext/MealsContext";

const useMealContext = (weekday: Weekday, mealIndex: number) => {
  const [meal, setMeal] = useState<Meal | null>(null);
  const ctx = useContext(MealsContext);

  useEffect(() => {
    setMeal(ctx[weekday][mealIndex]);
  }, [ctx, weekday, mealIndex]);

  const mealSet = function mealSet(meal: Meal) {
    ctx.setMeal?.(weekday, mealIndex, meal);
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

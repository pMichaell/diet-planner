import { Meal, Weekday } from "../../Models";
import { createContext } from "react";

export type MealsContextType = {
  monday: Meal[];
  tuesday: Meal[];
  wednesday: Meal[];
  thursday: Meal[];
  friday: Meal[];
  saturday: Meal[];
  sunday: Meal[];
  allMealsPicked?: boolean;
  setMeal?: (weekday: Weekday, mealIndex: number, meal: Meal) => void;
  removeMeal?: (weekday: Weekday, mealIndex: number) => void;
};

const defaultValue: MealsContextType = {
  monday: new Array<Meal>(),
  tuesday: new Array<Meal>(),
  wednesday: new Array<Meal>(),
  thursday: new Array<Meal>(),
  friday: new Array<Meal>(),
  saturday: new Array<Meal>(),
  sunday: new Array<Meal>(),
};

const context = createContext(defaultValue);

export default context;

import { Meal, Weekday } from "../../Models";
import { createContext } from "react";

type MealsContext = {
  monday: Meal[];
  tuesday: Meal[];
  wednesday: Meal[];
  thursday: Meal[];
  friday: Meal[];
  saturday: Meal[];
  sunday: Meal[];
  addMeal?: (weekday: Weekday, meal: Meal) => void;
  removeMeal?: (weekday: Weekday, mealID: string) => void;
};

const defaultValue: MealsContext = {
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

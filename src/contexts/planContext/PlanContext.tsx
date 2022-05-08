import { Meal, Weekday } from "../../Models";
import { createContext } from "react";

export type PlanContextType = {
  planName: string;
  mealsCount: number | string;
  mealNames: string[];
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

const defaultValue: PlanContextType = {
  planName: "",
  mealsCount: "",
  mealNames: new Array<string>(0),
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

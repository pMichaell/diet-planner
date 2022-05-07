import { Meal, Plan, Weekday } from "../../Models";
import { createContext } from "react";

export type PlanContextType = {
  planName: string;
  mealsCount: number | string;
  mealNames: string[];
  plan: Plan;
  addMeal?: (weekday: Weekday, meal: Meal) => void;
  removeMeal?: (weekday: Weekday, mealID: string) => void;
};

export const defaultPlan: Plan = {
  monday: new Array<Meal>(),
  tuesday: new Array<Meal>(),
  wednesday: new Array<Meal>(),
  thursday: new Array<Meal>(),
  friday: new Array<Meal>(),
  saturday: new Array<Meal>(),
  sunday: new Array<Meal>(),
};

const defaultValue: PlanContextType = {
  planName: "",
  mealsCount: "",
  mealNames: new Array<string>(0),
  plan: defaultPlan,
};

const context = createContext(defaultValue);

export default context;

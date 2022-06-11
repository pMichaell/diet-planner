import { createContext } from "react";
import { Weekday } from "../../Models";

export type PlanContextType = {
  planID: string;
  planName: string;
  mealsCount: number | string;
  mealNames: string[];
};

const defaultValue: PlanContextType = {
  planID: "",
  planName: "",
  mealsCount: "",
  mealNames: new Array<string>(0),
};

const context = createContext(defaultValue);

export default context;

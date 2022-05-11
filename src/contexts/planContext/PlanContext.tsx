import { createContext } from "react";

export type PlanContextType = {
  planName: string;
  mealsCount: number | string;
  mealNames: string[];
};

const defaultValue: PlanContextType = {
  planName: "",
  mealsCount: "",
  mealNames: new Array<string>(0),
};

const context = createContext(defaultValue);

export default context;

import PlanContext, { defaultPlan, PlanContextType } from "./PlanContext";
import { useReducer } from "react";
import { Meal, Weekday } from "../../Models";

const ACTION_TYPE = { type: "" };

const PlanContextProvider = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  const addMeal = function addMeal(weekday: Weekday, meal: Meal) {};

  const defaultValue: PlanContextType = {
    planName: (localStorage.getItem("planName") as string) ?? "",
    mealsCount: (localStorage.getItem("mealsCount") as unknown as number) ?? "",
    mealNames: JSON.parse(localStorage.getItem("mealNames") ?? "[]"),
    plan: defaultPlan,
  };

  // return <PlanContext.Provider value={}></PlanContext.Provider>;
};

export default PlanContextProvider;

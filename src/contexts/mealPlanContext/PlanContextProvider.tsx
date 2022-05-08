import PlanContext, { PlanContextType } from "./PlanContext";
import { ReactNode, useReducer } from "react";
import { Meal, Weekday } from "../../Models";

const planName = JSON.parse((localStorage.getItem("planName") as string) ?? "");
const mealsCount = +JSON.parse(
  (localStorage.getItem("mealsCount") as string) ?? ""
);
const mealNames = JSON.parse(localStorage.getItem("mealNames") ?? "[]");

const initialState: PlanContextType = {
  planName,
  mealsCount,
  mealNames,
  monday: new Array<Meal>(mealsCount),
  tuesday: new Array<Meal>(mealsCount),
  wednesday: new Array<Meal>(mealsCount),
  thursday: new Array<Meal>(mealsCount),
  friday: new Array<Meal>(mealsCount),
  saturday: new Array<Meal>(mealsCount),
  sunday: new Array<Meal>(mealsCount),
};

type MealPayload = {
  weekday: Weekday;
  mealIndex: number;
  meal?: Meal;
  mealId?: number;
};

const resolveMealWeekday = function resolveMealWeekday(
  state: PlanContextType,
  mealPayload: MealPayload,
  add: boolean = true
) {
  let meals = state[mealPayload.weekday];
  add
    ? (meals[mealPayload.mealIndex] = mealPayload.meal!)
    : (meals = meals.filter((meal) => meal.idMeal !== mealPayload.mealId));

  switch (mealPayload.weekday) {
    case "monday":
      return {
        ...state,
        monday: meals,
      };
    case "tuesday": {
      return {
        ...state,
        tuesday: meals,
      };
    }
    case "wednesday": {
      return {
        ...state,
        wednesday: meals,
      };
    }
    case "thursday": {
      return {
        ...state,
        thursday: meals,
      };
    }
    case "friday": {
      return {
        ...state,
        friday: meals,
      };
    }
    case "saturday": {
      return {
        ...state,
        saturday: meals,
      };
    }
    case "sunday": {
      return {
        ...state,
        sunday: meals,
      };
    }
  }
};

type ACTION_TYPE =
  | { type: "addMeal"; mealPayload: MealPayload }
  | { type: "removeMeal"; mealPayload: MealPayload };

const reducer = function reducer(state: PlanContextType, action: ACTION_TYPE) {
  switch (action.type) {
    case "addMeal":
      return resolveMealWeekday(state, action.mealPayload);
    case "removeMeal":
      return resolveMealWeekday(state, action.mealPayload, false);
  }
};

const PlanContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeMeal = function removeMeal(mealID: number) {};

  return (
    <PlanContext.Provider value={initialState}>{children}</PlanContext.Provider>
  );
};

export default PlanContextProvider;

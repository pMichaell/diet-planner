import PlanContext, { PlanContextType } from "./PlanContext";
import { ReactNode, useEffect, useReducer } from "react";
import { Meal, Weekday } from "../../Models";
import usePlanDetails from "../../hooks/use-plan-details";

const initialState: PlanContextType = {
  planName: "",
  mealsCount: "",
  mealNames: [],
  monday: new Array<Meal>(),
  tuesday: new Array<Meal>(),
  wednesday: new Array<Meal>(),
  thursday: new Array<Meal>(),
  friday: new Array<Meal>(),
  saturday: new Array<Meal>(),
  sunday: new Array<Meal>(),
};

type MealPayload = {
  weekday: Weekday;
  mealIndex: number;
  meal?: Meal;
  mealId?: number;
};

const resolveMealWeekday = function resolveMealWeekday(
  //TODO use this, keyof instead of this crap
  /*
let variable = "x";

let object: Test = {
    x: "test"
}

object[variable as keyof Test] = "new value";

console.log(object.x);*/

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
  | { type: "removeMeal"; mealPayload: MealPayload }
  | {
      type: "setNaming";
      payload: { planName: string; mealsCount: number; mealNames: string[] };
    };

const reducer = function reducer(state: PlanContextType, action: ACTION_TYPE) {
  switch (action.type) {
    case "addMeal":
      return resolveMealWeekday(state, action.mealPayload);
    case "removeMeal":
      return resolveMealWeekday(state, action.mealPayload, false);
    case "setNaming":
      return {
        ...state,
        planName: action.payload.planName,
        mealsCount: action.payload.mealsCount,
        mealNames: action.payload.mealNames,
      };
  }
};

const PlanContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { planName, mealsCount, mealNames } = usePlanDetails();

  useEffect(() => {
    dispatch({
      type: "setNaming",
      payload: { planName, mealsCount, mealNames },
    });
  }, [planName, mealsCount, mealNames]);

  return <PlanContext.Provider value={state}>{children}</PlanContext.Provider>;
};

export default PlanContextProvider;

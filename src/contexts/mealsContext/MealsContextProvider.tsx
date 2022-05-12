import { Meal, Weekday } from "../../Models";
import MealsContext, { MealsContextType } from "./MealsContext";
import { ReactNode, useEffect, useReducer } from "react";

const initialState: MealsContextType = {
  monday: new Array<Meal>(),
  tuesday: new Array<Meal>(),
  wednesday: new Array<Meal>(),
  thursday: new Array<Meal>(),
  friday: new Array<Meal>(),
  saturday: new Array<Meal>(),
  sunday: new Array<Meal>(),
};

type ACTION_TYPE =
  | {
      type: "setMeal";
      payload: { weekday: Weekday; mealIndex: number; meal: Meal };
    }
  | { type: "removeMeal"; payload: { weekday: Weekday; mealIndex: number } };

const reducer = function reducer(state: MealsContextType, action: ACTION_TYPE) {
  switch (action.type) {
    case "setMeal":
      let newArr = state[action.payload.weekday];
      newArr[action.payload.mealIndex] = action.payload.meal;
      return {
        ...state,
        [action.payload.weekday]: newArr,
      };
    case "removeMeal":
      let toDeleteArr = state[action.payload.weekday];
      toDeleteArr.splice(action.payload.mealIndex, 1);
      return {
        ...state,
        [action.payload.weekday]: toDeleteArr,
      };
  }
};

const MealsContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("Meals Context Provider useEffect run");
    console.log(state);
  }, [state]);

  const setMeal = function setMeal(
    weekday: Weekday,
    mealIndex: number,
    meal: Meal
  ) {
    dispatch({ type: "setMeal", payload: { weekday, mealIndex, meal } });
  };

  const removeMeal = function removeMeal(weekday: Weekday, mealIndex: number) {
    dispatch({ type: "removeMeal", payload: { weekday, mealIndex } });
  };

  return (
    <MealsContext.Provider value={{ ...state, setMeal, removeMeal }}>
      {children}
    </MealsContext.Provider>
  );
};

export default MealsContextProvider;

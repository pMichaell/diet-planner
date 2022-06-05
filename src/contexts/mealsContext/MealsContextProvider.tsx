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

const init = (initialValue: MealsContextType) => {
  let counter = 0;
  for (let initialStateKey in initialState) {
    const localStorageItem = localStorage.getItem(initialStateKey);
    let mealsArray;
    if (localStorageItem) {
      mealsArray = JSON.parse(localStorageItem);
      initialValue[initialStateKey as keyof MealsContextType] = mealsArray;
    } else {
      counter++;
    }
  }
  console.log("initial state " + initialState);
  if (counter === 7) {
    return {
      monday: new Array<Meal>(),
      tuesday: new Array<Meal>(),
      wednesday: new Array<Meal>(),
      thursday: new Array<Meal>(),
      friday: new Array<Meal>(),
      saturday: new Array<Meal>(),
      sunday: new Array<Meal>(),
    };
  }
  return initialValue;
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
  const [state, dispatch] = useReducer(reducer, initialState, init);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const setMeal = function setMeal(
    weekday: Weekday,
    mealIndex: number,
    meal: Meal
  ) {
    let currentMeals = [...state[weekday]];
    currentMeals.splice(mealIndex, 1, meal);
    localStorage.setItem(weekday, JSON.stringify(currentMeals));
    dispatch({ type: "setMeal", payload: { weekday, mealIndex, meal } });
  };

  const removeMeal = function removeMeal(weekday: Weekday, mealIndex: number) {
    let currentMeals = [...state[weekday]];
    currentMeals.splice(mealIndex, 1);
    localStorage.setItem(weekday, JSON.stringify(currentMeals));
    dispatch({ type: "removeMeal", payload: { weekday, mealIndex } });
  };

  return (
    <MealsContext.Provider value={{ ...state, setMeal, removeMeal }}>
      {children}
    </MealsContext.Provider>
  );
};

export default MealsContextProvider;

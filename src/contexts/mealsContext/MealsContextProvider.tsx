import { Meal, Weekday } from "../../Models";
import MealsContext, { MealsContextType } from "./MealsContext";
import { ReactNode, useEffect, useReducer, useState } from "react";

const mealsCount = +JSON.parse(localStorage.getItem("mealsCount") ?? "5");

const initialState: MealsContextType = {
  monday: new Array<Meal>(mealsCount).fill({
    strMeal: "",
    strMealThumb: "",
    idMeal: "",
  }),
  tuesday: new Array<Meal>(mealsCount).fill({
    strMeal: "",
    strMealThumb: "",
    idMeal: "",
  }),
  wednesday: new Array<Meal>(mealsCount).fill({
    strMeal: "",
    strMealThumb: "",
    idMeal: "",
  }),
  thursday: new Array<Meal>(mealsCount).fill({
    strMeal: "",
    strMealThumb: "",
    idMeal: "",
  }),
  friday: new Array<Meal>(mealsCount).fill({
    strMeal: "",
    strMealThumb: "",
    idMeal: "",
  }),
  saturday: new Array<Meal>(mealsCount).fill({
    strMeal: "",
    strMealThumb: "",
    idMeal: "",
  }),
  sunday: new Array<Meal>(mealsCount).fill({
    strMeal: "",
    strMealThumb: "",
    idMeal: "",
  }),
};

const init = () => {
  let initValue = { ...initialState };

  for (let initialStateKey in initialState) {
    const localStorageItem = localStorage.getItem(initialStateKey);
    let mealsArray;
    if (localStorageItem) {
      mealsArray = JSON.parse(localStorageItem);
      initValue[initialStateKey as keyof MealsContextType] = mealsArray;
    }
  }

  return initValue;
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
      let newArr = [...state[action.payload.weekday]];
      newArr.splice(action.payload.mealIndex, 1, action.payload.meal);
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
  const [allMealsPicked, setAllMealsPicked] = useState<boolean>(false);

  useEffect(() => {
    const stateValues = Object.values(state) as Array<Meal[]>;
    const allPicked = stateValues.every((mealArray) =>
      mealArray.every((meal) =>
        Object.values(meal).every((value) => value !== "")
      )
    );
    setAllMealsPicked(allPicked);
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
    <MealsContext.Provider
      value={{ ...state, setMeal, removeMeal, allMealsPicked }}
    >
      {children}
    </MealsContext.Provider>
  );
};

export default MealsContextProvider;

import classes from "./PlannerPage.module.css";
import AnimatedPage from "../../components/animatedPage/AnimatedPage";
import { Route, Routes } from "react-router-dom";
import clsx from "clsx";
import React from "react";
import Planner from "./Planner/Planner";
import PlanContextProvider from "../../contexts/planContext/PlanContextProvider";
import MealsContextProvider from "../../contexts/mealsContext/MealsContextProvider";
import Questionnaire from "./questionnaire/Questionnaire";
import MealPicker from "./mealPicker/MealPicker";

const PlannerPage = () => {
  return (
    <AnimatedPage
      className={clsx("fillParent", "centerContents", classes.container)}
    >
      <Routes>
        <Route
          index
          element={
            <PlanContextProvider>
              <MealsContextProvider>
                <Planner />
              </MealsContextProvider>
            </PlanContextProvider>
          }
        />
        <Route path={"/questionnaire"} element={<Questionnaire />} />
        <Route path={"/picker"} element={<MealPicker />} />
      </Routes>
    </AnimatedPage>
  );
};

export default PlannerPage;

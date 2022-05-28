import classes from "./PlannerPage.module.css";
import AnimatedPage from "../../components/animatedPage/AnimatedPage";
import { Route, Routes } from "react-router-dom";
import clsx from "clsx";
import React, { Fragment, Suspense } from "react";
import Planner from "./Planner/Planner";
import PlanContextProvider from "../../contexts/planContext/PlanContextProvider";
import MealsContextProvider from "../../contexts/mealsContext/MealsContextProvider";
import Questionnaire from "./questionnaire/Questionnaire";
import SuspenseSpinner from "../../components/suspenseComponents/SuspenseSpinner";

const ChooseTypePicker = React.lazy(
  () => import("./chooseTypePicker/ChooseTypePicker")
);

const MealPicker = React.lazy(() => import("./mealPicker/MealPicker"));

const PlannerPage = () => {
  return (
    <Fragment>
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
        <Route
          path={"/meal-picker"}
          element={
            <Suspense fallback={<SuspenseSpinner />}>
              <MealPicker />
            </Suspense>
          }
        />
        <Route
          path={"/type-picker"}
          element={
            <Suspense fallback={<SuspenseSpinner />}>
              <ChooseTypePicker />
            </Suspense>
          }
        />
      </Routes>
    </Fragment>
  );
};

export default PlannerPage;

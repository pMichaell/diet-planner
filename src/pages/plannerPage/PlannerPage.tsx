import { Route, Routes } from "react-router-dom";
import React, { Fragment, Suspense } from "react";
import Planner from "./Planner/Planner";
import PlanContextProvider from "../../contexts/planContext/PlanContextProvider";
import Questionnaire from "./questionnaire/Questionnaire";
import LoadingSpinner from "../../components/loadingComponents/LoadingSpinner";

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
              <Planner />
            </PlanContextProvider>
          }
        />
        <Route path={"/questionnaire"} element={<Questionnaire />} />
        <Route
          path={"/meal-picker"}
          element={
            <Suspense
              fallback={<LoadingSpinner size={"6em"} weight={"bold"} center />}
            >
              <MealPicker />
            </Suspense>
          }
        />
        <Route
          path={"/type-picker"}
          element={
            <Suspense
              fallback={<LoadingSpinner size={"6em"} weight={"bold"} center />}
            >
              <ChooseTypePicker />
            </Suspense>
          }
        />
      </Routes>
    </Fragment>
  );
};

export default PlannerPage;

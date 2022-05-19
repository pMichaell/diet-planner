import classes from "./PlannerPage.module.css";
import AnimatedPage from "../../components/animatedPage/AnimatedPage";
import { Route, Routes } from "react-router-dom";
import clsx from "clsx";
import React, { Suspense } from "react";
import Planner from "./Planner/Planner";
import PlanContextProvider from "../../contexts/planContext/PlanContextProvider";
import MealsContextProvider from "../../contexts/mealsContext/MealsContextProvider";
import Questionnaire from "./questionnaire/Questionnaire";
import SuspenseSpinner from "../../components/suspenseComponents/SuspenseSpinner";

const ChooseTypePicker = React.lazy(
  () => import("./typePicker/ChooseTypePicker")
);

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
        <Route
          path={"/type-picker"}
          element={
            <Suspense fallback={<SuspenseSpinner />}>
              <ChooseTypePicker />
            </Suspense>
          }
        />
      </Routes>
    </AnimatedPage>
  );
};

export default PlannerPage;

import classes from "./PlannerPage.module.css";
import AnimatedPage from "../../components/animatedPage/AnimatedPage";
import { Route, Routes } from "react-router-dom";
import Questionnaire from "./questionnaire/Questionnaire";
import clsx from "clsx";
import Planner from "./Planner/Planner";
import PlanContextProvider from "../../contexts/mealPlanContext/PlanContextProvider";

const PlannerPage = () => {
  return (
    <PlanContextProvider>
      <AnimatedPage
        className={clsx("fillParent", "centerContents", classes.container)}
      >
        <Routes>
          <Route index element={<Planner />} />
          <Route path={"/questionnaire"} element={<Questionnaire />} />
        </Routes>
      </AnimatedPage>
    </PlanContextProvider>
  );
};

export default PlannerPage;

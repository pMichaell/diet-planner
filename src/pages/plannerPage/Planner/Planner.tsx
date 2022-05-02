import classes from "./Planner.module.css";
import AnimatedPage from "../../../components/animatedPage/AnimatedPage";
import clsx from "clsx";
import useSessionState from "../../../hooks/use-session-state";
import { useEffect } from "react";

const Planner = () => {
  const mealNames = useSessionState<string[]>("mealNames", [
    "1",
    "2",
    "3",
    "4",
    "5",
  ]);

  useEffect(() => {
    console.log(mealNames);
  }, [mealNames]);

  return (
    <AnimatedPage
      className={clsx("fillParent", "pagePadding", "centerContents")}
    >
      <div>PLANNER</div>
    </AnimatedPage>
  );
};

export default Planner;

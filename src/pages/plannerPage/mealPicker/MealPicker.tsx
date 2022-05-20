import classes from "./MealPicker.module.css";
import AnimatedPage from "../../../components/animatedPage/AnimatedPage";
import clsx from "clsx";
import { useEffect } from "react";
import { PickMode } from "../../../Models";

const MealPicker = () => {
  useEffect(() => {
    const element: { mode: PickMode; params: string } = JSON.parse(
      sessionStorage.getItem("mealFetchData") || ""
    );
    console.log(element);
  }, []);

  return (
    <AnimatedPage className={clsx("fillParent", "fillParent", "pagePadding")}>
      <h2>Meal Picker</h2>
    </AnimatedPage>
  );
};

export default MealPicker;

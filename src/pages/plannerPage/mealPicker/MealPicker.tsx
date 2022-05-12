import AnimatedPage from "../../../components/animatedPage/AnimatedPage";
import clsx from "clsx";

const MealPicker = () => {
  return (
    <AnimatedPage
      className={clsx(
        "fillParent",
        "overflowHidden",
        "pagePadding",
        "centerContents"
      )}
    >
      <div className={clsx("fillParent", "centerContents")}>Meal Picker</div>
    </AnimatedPage>
  );
};

export default MealPicker;

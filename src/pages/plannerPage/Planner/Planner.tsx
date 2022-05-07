import AnimatedPage from "../../../components/animatedPage/AnimatedPage";
import clsx from "clsx";
import { Weekday } from "../../../Models";

const weekdays: Weekday[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const Planner = () => {
  return (
    <AnimatedPage
      className={clsx("fillParent", "pagePadding", "centerContents")}
    >
      <div>PLANNER</div>
    </AnimatedPage>
  );
};

export default Planner;

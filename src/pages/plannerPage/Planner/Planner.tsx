import classes from "./Planner.module.css";
import AnimatedPage from "../../../components/animatedPage/AnimatedPage";
import clsx from "clsx";
import { Weekday } from "../../../Models";
import { useContext } from "react";
import PlanContext from "../../../contexts/planContext/PlanContext";
import { AnimatePresence } from "framer-motion";
import useSlider from "../../../hooks/use-slider";
import Slider from "../../../components/slider/Slider";
import WeekdayContainer from "./weekdayContainer/WeekdayContainer";

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
  const planContext = useContext(PlanContext);
  const { page, direction, currentIndex, paginate } = useSlider<Weekday>(
    weekdays,
    "plannerSliderIndex"
  );

  return (
    <AnimatedPage
      className={clsx("fillParent", "pagePadding", "centerContents")}
    >
      <AnimatePresence initial={false} custom={direction}>
        <Slider
          sliderMovement={{ page, direction, paginate }}
          className={clsx(
            "fillParent",
            "fs600",
            "curvedBorder",
            "overflowHidden",
            "backdropFilter",
            classes.mealPicker
          )}
          render={() => (
            <WeekdayContainer
              currentIndex={currentIndex}
              weekday={weekdays[currentIndex]}
            />
          )}
        />
      </AnimatePresence>
    </AnimatedPage>
  );
};

export default Planner;

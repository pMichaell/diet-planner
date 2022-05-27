import classes from "./Planner.module.css";
import AnimatedPage from "../../../components/animatedPage/AnimatedPage";
import clsx from "clsx";
import { Weekday } from "../../../Models";
import { AnimatePresence } from "framer-motion";
import useSlider from "../../../hooks/use-slider";
import Slider from "../../../components/slider/Slider";
import WeekdayContainer from "./weekdayContainer/WeekdayContainer";
import { useContext } from "react";
import PlanContext from "../../../contexts/planContext/PlanContext";
import useLocalStorage from "../../../hooks/use-local-storage";
import { useNavigate } from "react-router-dom";

const weekdays: Weekday[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export type OnPlannerElementClick = (
  pickedWeekday: string,
  pickedMealIndex: number
) => void;

const Planner = () => {
  const navigate = useNavigate();
  const { page, direction, currentIndex, paginate } = useSlider<Weekday>(
    weekdays,
    "currentWeekday"
  );

  const setPickData: OnPlannerElementClick = function setPickData(
    pickedWeekday,
    pickedMealIndex
  ) {
    localStorage.setItem("plannerIndex", pickedMealIndex.toString());
    localStorage.setItem("weekday", pickedWeekday);
    navigate("type-picker");
  };

  return (
    <AnimatedPage
      className={clsx(
        "fillParent",
        "pagePadding",
        "centerContents",
        "overflowHidden"
      )}
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
              weekday={weekdays[currentIndex]}
              onElementClick={setPickData}
            />
          )}
        />
      </AnimatePresence>
    </AnimatedPage>
  );
};

export default Planner;

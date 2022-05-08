import classes from "./Planner.module.css";
import AnimatedPage from "../../../components/animatedPage/AnimatedPage";
import clsx from "clsx";
import { Weekday } from "../../../Models";
import { useContext } from "react";
import PlanContext from "../../../contexts/planContext/PlanContext";
import { AnimatePresence, motion } from "framer-motion";
import useSlider from "../../../hooks/use-slider";
import Slider from "../../../components/slider/Slider";

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
  const { page, direction, currentIndex, paginate } =
    useSlider<Weekday>(weekdays);

  console.log(currentIndex);

  return (
    <AnimatedPage
      className={clsx("fillParent", "pagePadding", "centerContents")}
    >
      <motion.div
        className={clsx(
          "centerContents",
          "standardBorder",
          "backdropFilter",
          "overflowHidden",
          classes.mealsContainer
        )}
      >
        <AnimatePresence initial={false} custom={direction}>
          <Slider
            sliderMovement={{ page, direction, paginate }}
            className={clsx("fillParent", "fs600", classes.mealPicker)}
            render={() => <p>{weekdays[currentIndex]}</p>}
          />
        </AnimatePresence>
      </motion.div>
    </AnimatedPage>
  );
};

export default Planner;

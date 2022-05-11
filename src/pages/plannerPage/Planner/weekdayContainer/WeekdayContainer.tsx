import classes from "./WeekdayContainer.module.css";
import { motion } from "framer-motion";
import { Weekday } from "../../../../Models";
import clsx from "clsx";
import { useContext } from "react";
import PlanContext from "../../../../contexts/planContext/PlanContext";
import MealElement from "./weekdayContainerElement/WeekdayContainerElement";

type WeekdayContainerProps = {
  currentIndex: Number;
  weekday: Weekday;
  className?: string;
};

const WeekdayContainer = ({ currentIndex, weekday }: WeekdayContainerProps) => {
  const ctx = useContext(PlanContext);

  console.log(ctx.mealNames);

  return (
    <motion.div
      key={weekday}
      className={clsx("fillParent", "flow", "clrGreen", classes.container)}
    >
      <p className={clsx("fs600", "fontAccent")}>{weekday}</p>
      {ctx.mealNames &&
        ctx.mealNames.map((mealName, index) => (
          <MealElement
            key={index}
            mealName={mealName}
            mealIndex={index}
            weekday={weekday}
            className={classes.mealElement}
          />
        ))}
    </motion.div>
  );
};

export default WeekdayContainer;

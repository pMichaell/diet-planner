import classes from "./WeekdayContainer.module.css";
import { motion } from "framer-motion";
import { Weekday } from "../../../../Models";
import clsx from "clsx";
import { useContext } from "react";
import PlanContext from "../../../../contexts/planContext/PlanContext";
import WeekdayContainerElement from "./weekdayContainerElement/WeekdayContainerElement";
import { OnPlannerElementClick } from "../Planner";

type WeekdayContainerProps = {
  weekday: Weekday;
  onElementClick: OnPlannerElementClick;
  className?: string;
};

const WeekdayContainer = ({
  weekday,
  onElementClick,
}: WeekdayContainerProps) => {
  const ctx = useContext(PlanContext);

  return (
    <motion.div
      key={weekday}
      className={clsx("fillParent", "flow", "clrGreen", classes.container)}
    >
      <p className={clsx("fs600", "fontAccent")}>{weekday}</p>
      {ctx.mealNames &&
        ctx.mealNames.map((mealName, index) => (
          <WeekdayContainerElement
            key={index}
            mealName={mealName}
            mealIndex={index}
            weekday={weekday}
            onClick={onElementClick}
            className={classes.mealElement}
          />
        ))}
    </motion.div>
  );
};

export default WeekdayContainer;

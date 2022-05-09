import { motion } from "framer-motion";
import { Weekday } from "../../../../Models";
import clsx from "clsx";

type WeekdayContainerProps = {
  currentIndex: Number;
  weekday: Weekday;
  className?: string;
};

const mealsCount = localStorage.getItem("mealsCount");

const WeekdayContainer = ({ currentIndex, weekday }: WeekdayContainerProps) => {
  console.log(mealsCount);

  return (
    <motion.div key={weekday} className={clsx("fillParent")}>
      <p>{weekday}</p>
    </motion.div>
  );
};

export default WeekdayContainer;

import { motion } from "framer-motion";
import classes from "./PlanSummaryElement.module.css";
import { DietPlan } from "../../../Models";
import clsx from "clsx";

const PlanSummaryElement = ({
  summaryInfo,
  index,
  onClick,
}: {
  summaryInfo: Pick<DietPlan, "planName">;
  index: number;
  onClick: () => void;
}) => {
  return (
    <motion.button
      className={clsx("clrGreen", classes.summaryContainer)}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <p className={clsx("fw600", "fs700", classes.indexParagraph)}>
        {index + 1}.
      </p>
      <em className={clsx("fw500", "fs600", classes.summaryContainer)}>
        {summaryInfo.planName.slice(1).slice(0, -1)}
      </em>
    </motion.button>
  );
};

export default PlanSummaryElement;

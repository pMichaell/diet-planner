import { motion } from "framer-motion";
import classes from "./PlanSummaryElement.module.css";
import { DietPlan } from "../../../Models";
import clsx from "clsx";
import { Eye, X } from "phosphor-react";

const PlanSummaryElement = ({
  summaryInfo,
  index,
  onViewClick,
  onDeleteClick,
}: {
  summaryInfo: Pick<DietPlan, "planName">;
  index: number;
  onViewClick: () => void;
  onDeleteClick: () => void;
}) => {
  return (
    <motion.article className={clsx("clrGreen", classes.summaryContainer)}>
      <p className={clsx("fw600", "fs700", classes.indexParagraph)}>
        {index + 1}.
      </p>
      <em className={clsx("fw500", "fs600", classes.summaryContainer)}>
        {summaryInfo.planName.slice(1).slice(0, -1)}
      </em>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onViewClick}
      >
        <Eye size={"2.5em"} weight={"regular"} />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onDeleteClick}
      >
        <X size={"2.5em"} weight={"regular"} />
      </motion.button>
    </motion.article>
  );
};

export default PlanSummaryElement;

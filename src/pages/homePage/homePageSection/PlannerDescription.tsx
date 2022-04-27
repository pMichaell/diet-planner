import { motion } from "framer-motion";
import classes from "./PlannerDescription.module.css";
import clsx from "clsx";

const PlannerDescription = ({
  number,
  text,
}: {
  number: string;
  text: string;
}) => {
  return (
    <motion.section className={clsx("fillParent", classes.homePageSection)}>
      <div className={classes.numberDiv}>
        <h2>{number}</h2>
      </div>
      <div className={classes.textDiv}>text</div>
    </motion.section>
  );
};

export default PlannerDescription;

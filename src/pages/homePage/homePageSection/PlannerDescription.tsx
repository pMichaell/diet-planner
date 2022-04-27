import { motion } from "framer-motion";
import classes from "./PlannerDescription.module.css";
import clsx from "clsx";

const variants = {
  initial: {
    opacity: 0.5,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.1,
    },
  },
  exit: {
    opacity: 0,
    x: "-100vw",
  },
};

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

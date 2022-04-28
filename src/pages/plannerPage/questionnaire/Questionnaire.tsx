import { AnimatePresence, motion } from "framer-motion";
import classes from "./Questionnaire.module.css";
import AnimatedPage from "../../../components/animatedPage/AnimatedPage";
import { verticalAlignmentVariants } from "../../../framerVariants";
import { useState } from "react";
import clsx from "clsx";

const Questionnaire = () => {
  const [namingSectionVisible, setNamingSectionVisible] = useState(false);
  return (
    <AnimatedPage
      className={clsx(
        "overflowHidden",
        "standardBorder",
        "backdropFilter",
        classes.container
      )}
    >
      <AnimatePresence>
        <motion.p variants={verticalAlignmentVariants} custom={3} key={2}>
          Name your brand new plan! (You can change the name later in your
          account page)
        </motion.p>
        <motion.input
          variants={verticalAlignmentVariants}
          custom={4}
          type="text"
          key={3}
        />
        <motion.p variants={verticalAlignmentVariants} custom={1} key={0}>
          How many meals per day would you like to eat?
        </motion.p>
        <motion.input
          variants={verticalAlignmentVariants}
          custom={2}
          type="text"
          key={1}
        />
        {namingSectionVisible && <motion.form></motion.form>}
      </AnimatePresence>
    </AnimatedPage>
  );
};

export default Questionnaire;

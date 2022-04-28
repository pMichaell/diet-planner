import { AnimatePresence, motion } from "framer-motion";
import classes from "./Questionnaire.module.css";
import AnimatedPage from "../../../components/animatedPage/AnimatedPage";
import { verticalAlignmentVariants } from "../../../framerVariants";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Questionnaire = () => {
  const [namingSectionVisible, setNamingSectionVisible] = useState(false);

  useEffect(() => {
    const element = document.getElementById("name");
    const timeout = setTimeout(() => {
      element?.focus();
    }, 1200);

    return () => window.clearTimeout(timeout);
  });

  return (
    <AnimatedPage
      className={clsx(
        "fillParent",
        "overflowHidden",
        "standardBorder",
        "backdropFilter",
        "clrGreen",
        classes.container
      )}
    >
      <AnimatePresence exitBeforeEnter>
        <motion.p
          variants={verticalAlignmentVariants}
          custom={3}
          key={2}
          className={clsx("fs500", "fw500")}
        >
          Name your brand new plan!
        </motion.p>
        <motion.input
          id={"name"}
          variants={verticalAlignmentVariants}
          custom={4}
          type="text"
          key={3}
          className={clsx(classes.input, "clrGreen", "txtAlgCenter")}
        />
        <motion.p
          variants={verticalAlignmentVariants}
          custom={1}
          key={0}
          className={clsx(classes.questionParagraph, "fs500", "fw500")}
        >
          How many meals per day would you like to eat?
        </motion.p>
        <motion.input
          variants={verticalAlignmentVariants}
          custom={2}
          type="text"
          key={1}
          className={clsx(classes.input, "clrGreen", "txtAlgCenter")}
        />
        {namingSectionVisible && <motion.form></motion.form>}
      </AnimatePresence>
    </AnimatedPage>
  );
};

export default Questionnaire;

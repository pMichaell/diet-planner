import { motion } from "framer-motion";
import classes from "./Questionnaire.module.css";
import AnimatedPage from "../../../components/animatedPage/AnimatedPage";
import { opacityVariants } from "../../../framerVariants";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { CaretDoubleRight } from "phosphor-react";
import MealNamer from "./MealNamer";

const variants = {
  initial: {
    y: "-100vh",
  },
  animate: {
    y: "0",
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.3,
    },
  },
};

const Questionnaire = () => {
  const [namingSectionVisible, setNamingSectionVisible] = useState(false);
  const [namingSectionFilled, setNamingSectionFilled] = useState(false);

  useEffect(() => {
    const element = document.getElementById("name");
    const timeout = setTimeout(() => {
      element?.focus();
    }, 1200);

    return () => window.clearTimeout(timeout);
  });

  return (
    <AnimatedPage className={clsx("fillParent", "overflowHidden")}>
      <motion.div
        variants={opacityVariants}
        initial={"initial"}
        animate={"animate"}
        className={clsx(
          "fillParent",
          "overflowHidden",
          "standardBorder",
          "backdropFilter",
          "clrGreen",
          classes.container
        )}
      >
        <motion.p
          key={0}
          variants={variants}
          className={clsx("fs500", "fw500")}
        >
          Name your brand new plan!
        </motion.p>
        <motion.input
          key={1}
          id={"name"}
          variants={variants}
          className={clsx(classes.input, "clrGreen", "txtAlgCenter")}
        />
        <motion.p
          key={2}
          variants={variants}
          className={clsx(
            classes.questionParagraph,
            classes.secondQuestion,
            "fs500",
            "fw500"
          )}
        >
          How many meals per day would you like to eat?
        </motion.p>
        <motion.input
          key={3}
          variants={variants}
          type="number"
          min="1"
          max="100"
          className={clsx(
            classes.input,
            classes.secondInput,
            "clrGreen",
            "txtAlgCenter"
          )}
          onBlur={() => {
            setNamingSectionVisible(true);
          }}
        />
        {namingSectionVisible && <MealNamer mealCount={3} />}
        <motion.div className={classes.arrow}>
          <CaretDoubleRight
            size={"36px"}
            weight={namingSectionFilled ? "fill" : "duotone"}
            className={"clrGreen"}
          />
        </motion.div>
      </motion.div>
    </AnimatedPage>
  );
};

export default Questionnaire;

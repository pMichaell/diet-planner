import { AnimatePresence, motion } from "framer-motion";
import classes from "./Questionnaire.module.css";
import AnimatedPage from "../../../components/animatedPage/AnimatedPage";
import { opacityVariants } from "../../../framerVariants";
import { useEffect, useRef, useState } from "react";
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
  const [inputError, inputErrorSet] = useState(false);
  const mealsCountRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const element = document.getElementById("name");
    const timeout = setTimeout(() => {
      element?.focus();
    }, 1200);

    return () => window.clearTimeout(timeout);
  }, []);

  const inputChangeHandler = (value: string) => {
    const inputValue = +value;

    if (inputValue >= 1 && inputValue <= 5) {
      inputErrorSet(false);
      setNamingSectionVisible(true);
      return;
    }

    inputErrorSet(true);
    setNamingSectionVisible(false);
    return;
  };

  const getRefValue = function getRefValue() {
    // @ts-ignore
    return +mealsCountRef.current.value;
  };

  // @ts-ignore
  return (
    <AnimatedPage
      className={clsx("fillParent", "overflowHidden", "centerContents")}
    >
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
          "ls1",
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
          ref={mealsCountRef}
          variants={variants}
          type="number"
          min="1"
          max="100"
          className={clsx(
            classes.input,
            classes.secondInput,
            "clrGreen",
            "txtAlgCenter",
            inputError && classes.inputError
          )}
          onFocus={() => {
            inputErrorSet(false);
          }}
          onChange={(event) => {
            inputChangeHandler(event.target.value);
          }}
        />
        <AnimatePresence>
          {namingSectionVisible && (
            <MealNamer
              mealCount={getRefValue()}
              setNamingSectionFilled={setNamingSectionFilled}
            />
          )}
        </AnimatePresence>
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

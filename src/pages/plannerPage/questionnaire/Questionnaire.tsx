import { AnimatePresence, motion } from "framer-motion";
import classes from "./Questionnaire.module.css";
import AnimatedPage from "../../../components/animatedPage/AnimatedPage";
import { opacityVariants } from "../../../framerVariants";
import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { CaretDoubleRight } from "phosphor-react";
import MealNamer from "./MealNamer";
import { useNavigate } from "react-router-dom";

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
  const [formFilled, formFilledSet] = useState(false);
  const [inputError, inputErrorSet] = useState(false);
  const mealNameRef = useRef<HTMLInputElement>(null);
  const mealsCountRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const element = document.getElementById("name");
    const timeout = setTimeout(() => {
      element?.focus();
    }, 1200);

    return () => window.clearTimeout(timeout);
  }, []);

  const submitHandler = () => {
    if (!formFilled) {
      return;
    }
    // @ts-ignore
    if (mealNameRef.current.value.length === 0) {
      const element = document.getElementById("name");
      element?.focus();
      return;
    }

    navigate("/");
  };

  const setFormFilled = useCallback((filled: boolean) => {
    // @ts-ignore
    if (mealNameRef.current.value.length === 0) {
      return;
    }
    formFilledSet(filled);
  }, []);

  const numberInputChangeHandler = (value: string) => {
    setFormFilled(false);
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
      className={clsx(
        "fillParent",
        "overflowHidden",
        "centerContents",
        "pagePadding"
      )}
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
          ref={mealNameRef}
          variants={variants}
          className={clsx(classes.input, "clrGreen", "txtAlgCenter")}
          onChange={(e) =>
            e.target.value === "" ? setFormFilled(false) : setFormFilled(true)
          }
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
            numberInputChangeHandler(event.target.value);
          }}
        />
        <AnimatePresence>
          {namingSectionVisible && (
            <MealNamer
              mealCount={getRefValue()}
              setFromFilled={setFormFilled}
            />
          )}
        </AnimatePresence>
        <motion.button
          className={clsx(classes.arrowContainer, "centerContents")}
          onClick={submitHandler}
        >
          <CaretDoubleRight
            size={"36px"}
            weight={formFilled ? "fill" : "duotone"}
            className={clsx("clrGreen")}
          />
        </motion.button>
      </motion.div>
    </AnimatedPage>
  );
};

export default Questionnaire;

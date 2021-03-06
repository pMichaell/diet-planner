import { AnimatePresence, motion } from "framer-motion";
import classes from "./Questionnaire.module.css";
import AnimatedPage from "../../../components/animatedPage/AnimatedPage";
import { opacityVariants } from "../../../framerVariants";
import React, { useCallback, useEffect, useReducer } from "react";
import clsx from "clsx";
import { CaretDoubleRight } from "phosphor-react";
import MealNamer from "./MealNamer";
import { useNavigate } from "react-router-dom";

type QuestionnaireForm = {
  namingSectionVisible: boolean;
  formFilled: boolean;
  mealNames: string[];
  planName: string;
  mealsCount: string;
  inputError: boolean;
};

type ACTION_TYPE =
  | { type: "setNamingSectionVisible"; payload: boolean }
  | { type: "setFormFilled"; payload: boolean }
  | { type: "setPlanName"; payload: string }
  | { type: "setMealsCount"; payload: string }
  | { type: "setMealNames"; payload: string[] }
  | { type: "setFirstInputError"; payload: boolean };

const reducer = (state: QuestionnaireForm, action: ACTION_TYPE) => {
  switch (action.type) {
    case "setNamingSectionVisible":
      return {
        ...state,
        namingSectionVisible: action.payload,
      };
    case "setFormFilled":
      return {
        ...state,
        formFilled: action.payload,
      };
    case "setPlanName":
      sessionStorage.setItem("planName", action.payload);
      return {
        ...state,
        planName: action.payload,
      };
    case "setMealsCount":
      sessionStorage.setItem("mealsCount", action.payload);
      return {
        ...state,
        mealsCount: action.payload,
      };
    case "setMealNames":
      return {
        ...state,
        mealNames: action.payload,
      };
    case "setFirstInputError":
      return {
        ...state,
        inputError: action.payload,
      };
  }
};

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

const initialState: QuestionnaireForm = {
  namingSectionVisible: false,
  formFilled: false,
  mealNames: [],
  planName: (sessionStorage.getItem("planName") as string) ?? "",
  mealsCount: (sessionStorage.getItem("mealsCount") as string) ?? "",
  inputError: false,
};

const Questionnaire = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const checkFormFilled = useCallback(() => {
    const mealsCount = +state.mealsCount;

    if (
      state.planName !== "" &&
      !state.mealNames.includes("") &&
      state.mealNames.length === mealsCount &&
      mealsCount >= 1 &&
      mealsCount <= 5
    ) {
      dispatch({ type: "setFormFilled", payload: true });
      return;
    }

    dispatch({ type: "setFormFilled", payload: false });
  }, [state.planName, state.mealNames, state.mealsCount]);

  const checkMealsCount = useCallback(() => {
    const mealsCount = +state.mealsCount;

    if (
      !state.namingSectionVisible &&
      state.mealsCount !== "" &&
      mealsCount >= 1 &&
      mealsCount <= 5
    ) {
      dispatch({ type: "setNamingSectionVisible", payload: true });
    }
  }, [state.mealsCount, state.namingSectionVisible]);

  useEffect(() => {
    checkMealsCount();
    checkFormFilled();
  }, [
    state.planName,
    state.mealNames,
    state.mealsCount,
    checkFormFilled,
    checkMealsCount,
  ]);

  const enterKeyHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      submitHandler();
    }
  };

  const submitHandler = () => {
    if (!state.formFilled) {
      return;
    }
    if (state.planName === "") {
      const element = document.getElementById("name");
      element?.focus();
      return;
    }

    fillLocalStorage();

    clearSessionStorage();

    navigate("..", { replace: true });
  };

  const numberInputChangeHandler = (value: string) => {
    dispatch({ type: "setMealsCount", payload: value });
    dispatch({ type: "setFormFilled", payload: false });
    const inputValue = +value;

    if (inputValue >= 1 && inputValue <= 5) {
      dispatch({ type: "setFirstInputError", payload: false });
      dispatch({ type: "setNamingSectionVisible", payload: true });
      return;
    }

    dispatch({ type: "setFirstInputError", payload: true });
    dispatch({ type: "setNamingSectionVisible", payload: false });
  };

  const fillLocalStorage = () => {
    localStorage.setItem("mealsCount", JSON.stringify(state.mealsCount));

    localStorage.setItem("mealNames", JSON.stringify(state.mealNames));

    localStorage.setItem("planName", JSON.stringify(state.planName.trim()));
  };

  const clearSessionStorage = () => {
    sessionStorage.removeItem("mealsCount");
    sessionStorage.removeItem("planName");
  };
  const setMealNames = useCallback((data: string[]) => {
    dispatch({ type: "setMealNames", payload: data });
  }, []);

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
        onKeyDown={enterKeyHandler}
        className={clsx(
          "fillParent",
          "centerContents",
          "overflowHidden",
          "curvedBorder",
          "backdropFilter",
          "clrGreen",
          "ls1",
          classes.container
        )}
      >
        <motion.p
          key={0}
          variants={variants}
          className={clsx("fs500", "fw500", classes.orderParagraph)}
        >
          Name your brand new plan!
        </motion.p>
        <motion.input
          key={1}
          id={"name"}
          value={state.planName}
          variants={variants}
          className={clsx(classes.input, "clrGreen", "txtAlgCenter")}
          onChange={(e) =>
            dispatch({ type: "setPlanName", payload: e.target.value })
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
          value={state.mealsCount}
          variants={variants}
          type="number"
          min="1"
          max="100"
          className={clsx(
            classes.input,
            classes.secondInput,
            "clrGreen",
            "txtAlgCenter",
            state.inputError && classes.inputError
          )}
          onFocus={() => {
            dispatch({ type: "setFirstInputError", payload: false });
          }}
          onChange={(e) => {
            numberInputChangeHandler(e.target.value);
          }}
        />
        <AnimatePresence>
          {state.namingSectionVisible && (
            <MealNamer
              mealsCount={state.mealsCount as unknown as number}
              setMealNames={setMealNames}
            />
          )}
        </AnimatePresence>
        <motion.button
          className={clsx(classes.arrowContainer, "centerContents")}
          onClick={submitHandler}
        >
          <CaretDoubleRight
            size={"36px"}
            weight={state.formFilled ? "fill" : "duotone"}
            className={clsx("clrGreen")}
          />
        </motion.button>
      </motion.div>
    </AnimatedPage>
  );
};

export default Questionnaire;

/*const element = document.getElementById("name");
  const timeout = setTimeout(() => {
    element?.focus();
  }, 1200);

  return () => window.clearTimeout(timeout);*/

import classes from "./MealPicker.module.css";
import AnimatedPage from "../../../components/animatedPage/AnimatedPage";
import clsx from "clsx";
import useFetchMeal from "../../../hooks/fetchHooks/use-fetch-meal";
import { motion } from "framer-motion";
import MealPickerElement from "../../../components/mealArticle/MealPickerElement";
import LoadingSpinner from "../../../components/loadingComponents/LoadingSpinner";
import { mealPickerVariants } from "./MealPickerVariants";
import React, { Suspense, useContext } from "react";
import ModalContext from "../../../contexts/modalContext/ModalContext";
import MealsContext from "../../../contexts/mealsContext/MealsContext";
import { Meal, Weekday } from "../../../Models";
import { useNavigate } from "react-router-dom";

const MealModal = React.lazy(
  () => import("../../../components/modal/modalVariants/mealModal/MealModal")
);

const MealPicker = () => {
  const modalContext = useContext(ModalContext);
  const [meals, error] = useFetchMeal();
  const mealsContext = useContext(MealsContext);
  const navigate = useNavigate();

  const onMealAdd = (meal: Meal) => {
    const currentWeekday = localStorage.getItem("weekday") ?? "";
    const currentMealIndex = +(localStorage.getItem("plannerIndex") ?? "");

    mealsContext.setMeal?.(currentWeekday as Weekday, currentMealIndex, meal);

    navigate("/planner");

    modalContext.closeModal?.();
  };

  const onMealElementClick = function onMealArticleClick(meal: Meal) {
    modalContext.setModalSize?.("big");
    modalContext.setModalChildren?.(
      <Suspense fallback={<LoadingSpinner weight={"bold"} center />}>
        <MealModal idMeal={meal.idMeal} onClick={() => onMealAdd(meal)} />
      </Suspense>
    );
    modalContext.openModal?.();
  };

  return (
    <AnimatedPage
      className={clsx(
        "fillParent",
        "pagePadding",
        "centerContents",
        "overflowHidden"
      )}
    >
      <motion.div
        variants={mealPickerVariants}
        initial={"initial"}
        animate={"animate"}
        className={clsx(
          "curvedBorder",
          "clrGreen",
          "maxWidthContainer",
          "fillParent",
          "backdropFilter",
          classes.mealPickerContainer
        )}
      >
        <section
          className={clsx(
            "centerContents",
            "containerTitle",
            classes.titleSection
          )}
        >
          Pick Something
        </section>
        <motion.section
          className={classes.mainSection}
          variants={mealPickerVariants}
          initial={"initial"}
          animate={"animate"}
        >
          {meals.length === 0 ? (
            <LoadingSpinner />
          ) : (
            meals.map((meal, index) => (
              <MealPickerElement
                key={meal.idMeal}
                articleIndex={index}
                meal={meal}
                onClick={onMealElementClick}
              />
            ))
          )}
        </motion.section>
      </motion.div>
    </AnimatedPage>
  );
};

export default MealPicker;

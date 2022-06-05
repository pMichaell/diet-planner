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

const MealModal = React.lazy(
  () => import("../../../components/modal/modalVariants/mealModal/MealModal")
);

const MealPicker = () => {
  const ctx = useContext(ModalContext);
  const [meals, error] = useFetchMeal();

  const onMealArticleClick = function onMealArticleClick(idMeal: string) {
    ctx.setModalSize?.("big");
    ctx.setModalChildren?.(
      <Suspense fallback={<LoadingSpinner weight={"bold"} center />}>
        <MealModal idMeal={idMeal} />
      </Suspense>
    );
    ctx.openModal?.();
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
                onClick={onMealArticleClick}
              />
            ))
          )}
        </motion.section>
      </motion.div>
    </AnimatedPage>
  );
};

export default MealPicker;

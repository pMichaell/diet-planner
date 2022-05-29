import classes from "./MealPicker.module.css";
import AnimatedPage from "../../../components/animatedPage/AnimatedPage";
import clsx from "clsx";
import useFetchMeal from "../../../hooks/fetchHooks/use-fetch-meal";
import { motion } from "framer-motion";
import MealArticle from "../../../components/mealArticle/MealArticle";
import SuspenseSpinner from "../../../components/suspenseComponents/SuspenseSpinner";
import { mealPickerVariants } from "./MealPickerVariants";
import { useContext } from "react";
import ModalContext from "../../../contexts/modalContext/ModalContext";

const MealPicker = () => {
  const ctx = useContext(ModalContext);
  const [meals, error] = useFetchMeal();

  const onMealArticleClick = function onMealArticleClick(idMeal: string) {};

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
            <SuspenseSpinner />
          ) : (
            meals.map((meal, index) => (
              <MealArticle
                key={meal.idMeal}
                articleIndex={index}
                meal={meal}
                className={clsx("curvedBorder", classes.mealArticle)}
              />
            ))
          )}
        </motion.section>
      </motion.div>
    </AnimatedPage>
  );
};

export default MealPicker;

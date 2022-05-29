import classes from "./MealPicker.module.css";
import AnimatedPage from "../../../components/animatedPage/AnimatedPage";
import clsx from "clsx";
import { useEffect } from "react";
import useFetchMeal from "../../../hooks/fetchHooks/use-fetch-meal";
import { motion } from "framer-motion";
import MealArticle from "../../../components/mealArticle/MealArticle";
import SuspenseSpinner from "../../../components/suspenseComponents/SuspenseSpinner";
import { AppleLogo } from "phosphor-react";

const MealPicker = () => {
  const [meals, error] = useFetchMeal();

  console.log(meals);

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
        <section className={classes.mainSection}>
          {meals.length === 0 ? (
            <SuspenseSpinner />
          ) : (
            meals.map((meal) => (
              <MealArticle
                key={meal.idMeal}
                meal={meal}
                className={clsx("curvedBorder", classes.mealArticle)}
              />
            ))
          )}
        </section>
      </motion.div>
    </AnimatedPage>
  );
};

export default MealPicker;

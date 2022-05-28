import classes from "./MealPicker.module.css";
import AnimatedPage from "../../../components/animatedPage/AnimatedPage";
import clsx from "clsx";
import { useEffect } from "react";
import useFetchMeal from "../../../hooks/fetchHooks/use-fetch-meal";
import { motion } from "framer-motion";

const MealPicker = () => {
  const [meals, error] = useFetchMeal();

  return (
    <AnimatedPage
      className={clsx(
        "fillParent",
        "fillParent",
        "pagePadding",
        "centerContents"
      )}
    >
      <motion.div
        className={clsx(
          "curvedBorder",
          "clrGreen",
          "maxWidthContainer",
          "fillParent"
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
        <section className={classes.mainSection}></section>
      </motion.div>
    </AnimatedPage>
  );
};

export default MealPicker;

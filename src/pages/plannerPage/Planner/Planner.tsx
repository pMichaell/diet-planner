import AnimatedPage from "../../../components/animatedPage/AnimatedPage";
import clsx from "clsx";
import classes from "./Planner.module.css";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import React, { Suspense, useContext } from "react";
import { Meal, Weekday } from "../../../Models";
import useSlider from "../../../hooks/use-slider";
import PlanContext from "../../../contexts/planContext/PlanContext";
import {
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
  IconContext,
} from "phosphor-react";
import Slider from "../../../components/slider/Slider";
import PlannerElement from "./plannerElement/PlannerElement";
import MealsContext from "../../../contexts/mealsContext/MealsContext";
import LoadingSpinner from "../../../components/loadingComponents/LoadingSpinner";
import MealModal from "../../../components/modal/modalVariants/mealModal/MealModal";
import ModalContext from "../../../contexts/modalContext/ModalContext";
import BinaryModal from "../../../components/modal/modalVariants/binaryModal/BinaryModal";

const weekdays: Weekday[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const Planner = () => {
  const navigate = useNavigate();
  const { page, direction, currentIndex, paginate } = useSlider<Weekday>(
    weekdays,
    "currentWeekday"
  );
  const planContext = useContext(PlanContext);
  const { allMealsPicked } = useContext(MealsContext);
  const modalContext = useContext(ModalContext);

  const setPickData = function setPickData(
    pickedWeekday: Weekday,
    pickedMealIndex: number
  ) {
    localStorage.setItem("plannerIndex", pickedMealIndex.toString());
    localStorage.setItem("weekday", pickedWeekday);
    navigate("type-picker");
  };

  const onMealElementClick = function onMealElementClick(meal: Meal) {
    modalContext.setModalSize?.("big");
    modalContext.setModalChildren?.(
      <Suspense fallback={<LoadingSpinner weight={"bold"} center />}>
        <MealModal
          idMeal={meal.idMeal}
          onClick={() => console.log("clicked")}
          buttonText={"Remove meal"}
        />
      </Suspense>
    );
    modalContext.openModal?.();
  };

  const onSubmitButtonClick = () => {
    modalContext.setModalChildren?.(
      <Suspense fallback={<LoadingSpinner weight={"bold"} center />}>
        <BinaryModal
          text={
            "Would you like to submit your meal plan in it's current state?"
          }
          leftOptionHandler={modalContext.closeModal}
          rightOptionHandler={modalContext.openModal}
          leftOptionText={"No"}
          rightOptionText={"Yes"}
        />
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
        "overflowHidden",
        allMealsPicked && classes.allMealsPicked
      )}
    >
      <motion.section
        className={clsx(
          "curvedBorder",
          "clrGreen",
          "maxWidthContainer",
          "fillParent",
          "backdropFilter",
          classes.chooseTypeSection
        )}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 110,
        }}
      >
        <ul className={classes.typesList}>
          <IconContext.Provider
            value={{
              size: "2em",
              weight: "duotone",
            }}
          >
            <button onClick={() => paginate(-1)} className={classes.navButton}>
              <CaretLeft />
            </button>
            <AnimatePresence exitBeforeEnter initial={false}>
              <Slider
                sliderMovement={{ page, direction, paginate }}
                className={clsx("fillParent", "centerContents")}
                render={() => (
                  <li className={clsx("fillParent", classes.typesListItem)}>
                    <p
                      className={clsx(
                        "fontHeadlines",
                        "fw400",
                        "fs700",
                        "capitalize"
                      )}
                    >
                      {weekdays[currentIndex]}
                    </p>
                  </li>
                )}
              />
            </AnimatePresence>
            <button className={classes.navButton} onClick={() => paginate(1)}>
              <CaretRight />
            </button>
          </IconContext.Provider>
        </ul>
        <motion.div className={clsx(classes.contentsContainer)}>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Slider
              sliderMovement={{ page, direction, paginate }}
              className={clsx("fillParent", "centerContents", "flow")}
            >
              {planContext.mealNames.map((mealName, index) => (
                <PlannerElement
                  key={`${weekdays[currentIndex]}${index}`}
                  mealName={mealName}
                  weekday={weekdays[currentIndex]}
                  mealIndex={index}
                  onUnpickedClick={setPickData}
                  onPickedClick={onMealElementClick}
                />
              ))}
            </Slider>
          </AnimatePresence>
        </motion.div>
      </motion.section>
      {allMealsPicked && (
        <motion.button
          className={clsx("clrGreen", "fs600", "fw600", classes.cta)}
          onClick={onSubmitButtonClick}
        >
          <CaretDoubleRight weight={"bold"} size={"2.5em"} />
        </motion.button>
      )}
    </AnimatedPage>
  );
};

export default Planner;

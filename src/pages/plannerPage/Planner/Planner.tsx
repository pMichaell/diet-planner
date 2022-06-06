import AnimatedPage from "../../../components/animatedPage/AnimatedPage";
import clsx from "clsx";
import classes from "./Planner.module.css";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import React, { useContext } from "react";
import { Weekday } from "../../../Models";
import useSlider from "../../../hooks/use-slider";
import PlanContext from "../../../contexts/planContext/PlanContext";
import { CaretLeft, CaretRight, IconContext } from "phosphor-react";
import Slider from "../../../components/slider/Slider";
import PlannerElement from "./plannerElement/PlannerElement";

export type OnPlannerElementClick = (
  pickedWeekday: string,
  pickedMealIndex: number
) => void;

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
  const ctx = useContext(PlanContext);

  const setPickData: OnPlannerElementClick = function setPickData(
    pickedWeekday,
    pickedMealIndex
  ) {
    localStorage.setItem("plannerIndex", pickedMealIndex.toString());
    localStorage.setItem("weekday", pickedWeekday);
    navigate("type-picker");
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
            <button className={classes.navButton} onClick={() => paginate(-1)}>
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
              {ctx.mealNames.map((mealName, index) => (
                <PlannerElement
                  key={`${mealName}${index}`}
                  mealName={mealName}
                  weekday={weekdays[currentIndex]}
                  mealIndex={index}
                  onClick={setPickData}
                />
              ))}
            </Slider>
          </AnimatePresence>
        </motion.div>
      </motion.section>
    </AnimatedPage>
  );
};

export default Planner;

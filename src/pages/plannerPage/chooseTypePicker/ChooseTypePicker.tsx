import classes from "./ChooseTypePicker.module.css";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Slider from "../../../components/slider/Slider";
import useSlider from "../../../hooks/use-slider";
import AnimatedPage from "../../../components/animatedPage/AnimatedPage";
import {
  Cardholder,
  CaretLeft,
  CaretRight,
  Fish,
  Globe,
  IconContext,
} from "phosphor-react";
import React, { useCallback } from "react";
import ElementsPicker from "./elementsPicker/ElementsPicker";
import { useNavigate } from "react-router-dom";
import { FetchInfo } from "../../../Models";
import { data } from "./ChooseTypePickerUtils";

type ParamKeys = "a" | "c" | "i";
const options = ["Regions", "Categories", "Main Ingredient"];
const paramKeys: ParamKeys[] = ["a", "c", "i"];

const icons = [<Globe />, <Cardholder />, <Fish />];

const ChooseTypePicker = () => {
  const navigate = useNavigate();
  const { page, direction, paginate, currentIndex } = useSlider(
    options,
    "categorySlider"
  );

  const onElementClick = useCallback(
    (fetchParam: string) => {
      const fetchInfo: FetchInfo = {
        [paramKeys[currentIndex]]: fetchParam,
      };

      localStorage.setItem("fetchInfo", JSON.stringify(fetchInfo));
      localStorage.removeItem("fetchedMeals");
      navigate("../meal-picker");
    },
    [currentIndex, navigate]
  );

  return (
    <AnimatedPage
      className={clsx(
        "fillParent",
        "overflowHidden",
        "pagePadding",
        "centerContents"
      )}
    >
      <motion.section
        className={clsx(
          "curvedBorder",
          "clrGreen",
          "maxWidthContainer",
          "fillParent",
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
                    <p className={clsx("fontHeadlines", "fw400", "fs600")}>
                      {options[currentIndex]}
                    </p>

                    {icons[currentIndex]}
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
              className={clsx(
                "fillParent",
                "centerContents",
                classes.contentsSlider
              )}
            >
              {
                <ElementsPicker
                  data={data[currentIndex]}
                  onClick={onElementClick}
                />
              }
            </Slider>
          </AnimatePresence>
        </motion.div>
      </motion.section>
    </AnimatedPage>
  );
};

export default ChooseTypePicker;

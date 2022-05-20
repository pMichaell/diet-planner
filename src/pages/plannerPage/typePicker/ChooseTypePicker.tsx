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
import { PickMode } from "../../../Models";

const options = ["Regions", "Categories", "Main Ingredient"];

const icons = [<Globe />, <Cardholder />, <Fish />];

const pickModes: PickMode[] = ["Region", "Category", "Ingredient"];

const categories: string[] = require("../../../assets/jsonData/categories.json");
const regions: string[] = require("../../../assets/jsonData/regions.json");
const ingredients: string[] = require("../../../assets/jsonData/ingredients.json");

const data = [regions, categories, ingredients];

const ChooseTypePicker = () => {
  const { page, direction, paginate, currentIndex } = useSlider(
    options,
    "categorySlider"
  );

  const onElementClick = useCallback((mode: PickMode, fetchParam: string) => {},
  []);

  return (
    <AnimatedPage
      className={clsx(
        "fillParent",
        "overflowHidden",
        "pagePadding",
        classes.container
      )}
    >
      <motion.section
        className={clsx("curvedBorder", "clrGreen", classes.chooseTypeSection)}
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
              style: { marginTop: "5px" },
              weight: "duotone",
            }}
          >
            <CaretLeft onClick={() => paginate(-1)} />
            <AnimatePresence exitBeforeEnter initial={false}>
              <Slider
                sliderMovement={{ page, direction, paginate }}
                className={clsx("fillParent", "centerContents")}
                render={() => (
                  <li className={clsx("fillParent", classes.typesListItem)}>
                    <h3 className={clsx("fontHeadlines", "fw400", "fs600")}>
                      {options[currentIndex]}
                    </h3>

                    {icons[currentIndex]}
                  </li>
                )}
              />
            </AnimatePresence>
            <CaretRight onClick={() => paginate(1)} />
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
                  mode={pickModes[currentIndex]}
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

import classes from "./TypePicker.module.css";
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
import React from "react";
import ElementsPicker, { PickMode } from "./elementsPicker/ElementsPicker";
import { Ingredient } from "../../../Models";

const options = ["Regions", "Categories", "Main Ingredient"];

const icons = [<Globe />, <Cardholder />, <Fish />];

const pickModes: PickMode[] = ["Region", "Category", "Ingredient"];

const categories: string[] = require("../../../assets/jsonData/categories.json");
const regions: string[] = require("../../../assets/jsonData/regions.json");
const ingredients: Ingredient[] = require("../../../assets/jsonData/ingredients.json");
const strIngredients = ingredients.map(
  (ingredient) => ingredient.strIngredient
);

const data = [categories, regions, strIngredients];

const TypePicker = () => {
  const { page, direction, paginate, currentIndex } = useSlider(
    options,
    "categorySlider"
  );

  return (
    <AnimatedPage
      className={clsx(
        "fillParent",
        "overflowHidden",
        "pagePadding",
        classes.container
      )}
    >
      <motion.h2
        className={clsx(
          "txtAlgCenter",
          "clrGreen",
          "fontHeadlines",
          "fw400",
          "fs500"
        )}
      >
        How would you like to pick your meal?
      </motion.h2>
      <motion.section
        className={clsx("curvedBorder", "clrGreen", classes.chooseTypeSection)}
      >
        <nav className={classes.nav}>
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
                  <div className={clsx("fillParent", classes.navElement)}>
                    <h3 className={clsx("fontHeadlines", "fw400", "fs600")}>
                      {options[currentIndex]}
                    </h3>

                    {icons[currentIndex]}
                  </div>
                )}
              />
            </AnimatePresence>
            <CaretRight onClick={() => paginate(1)} />
          </IconContext.Provider>
        </nav>
        <motion.div className={clsx(classes.contentsContainer)}>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Slider
              sliderMovement={{ page, direction, paginate }}
              className={clsx("fillParent", "centerContents")}
            >
              {
                <ElementsPicker
                  mode={pickModes[currentIndex]}
                  data={data[currentIndex]}
                />
              }
            </Slider>
          </AnimatePresence>
        </motion.div>
      </motion.section>
    </AnimatedPage>
  );
};

export default TypePicker;

import classes from "./TypePicker.module.css";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Slider from "../../../components/slider/Slider";
import useSlider from "../../../hooks/use-slider";
import AnimatedPage from "../../../components/animatedPage/AnimatedPage";
import RegionPicker from "./regionPicker/RegionPicker";
import CategoryPicker from "./categoryPicker/CategoryPicker";
import IngredientsPicker from "./ingredientsPicker/IngredientsPicker";

const options = ["Regions", "Categories", "Ingredients"];

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
        <AnimatePresence exitBeforeEnter initial={false}>
          <Slider
            sliderMovement={{ page, direction, paginate }}
            render={() => (
              <div>
                <h3 className={clsx("fontHeadlines", "fw400")}>
                  {options[currentIndex]}
                </h3>
              </div>
            )}
            className={clsx("centerContents", classes.nav)}
          />
        </AnimatePresence>
        <motion.div className={clsx(classes.contentsContainer)}>
          {currentIndex === 0 && <RegionPicker />}
          {currentIndex === 1 && <CategoryPicker />}
          {currentIndex === 2 && <IngredientsPicker />}
        </motion.div>
      </motion.section>
    </AnimatedPage>
  );
};

export default TypePicker;

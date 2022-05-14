import classes from "./TypePicker.module.css";
import AnimatedPage from "../../../components/animatedPage/AnimatedPage";
import clsx from "clsx";
import { motion } from "framer-motion";
import Slider from "../../../components/slider/Slider";
import useSlider from "../../../hooks/use-slider";

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
        <Slider
          sliderMovement={{ page, direction, paginate }}
          render={() => (
            <h3 className={clsx("fontHeadlines", "fw400")}>
              {options[currentIndex]}
            </h3>
          )}
          className={clsx("centerContents", classes.nav)}
        />

        <motion.div className={clsx(classes.contentsContainer)}></motion.div>
      </motion.section>
    </AnimatedPage>
  );
};

export default TypePicker;

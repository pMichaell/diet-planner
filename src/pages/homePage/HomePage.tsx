import classes from "./HomePage.module.css";
import AnimatedPage from "../../components/animatedPage/AnimatedPage";
import PlannerDescription from "./homePageSection/HomePageSection";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import data from "../../assets/jsonData/homePage.json";
import BreathingButton from "../../components/buttons/BreathingButton";

type homePageData = {
  number: string;
  text: string;
};

const homePageText = data[0].text;

const HomePage = () => {
  const [homePageActive, setHomePageActive] = useState(true);

  return (
    <AnimatedPage className={"fillParent"}>
      <AnimatePresence>
        <motion.div className={clsx("fillParent", classes.homePage)}>
          <motion.h2 className={clsx("uppercase", "ls1", "fontAccent")}>
            Plan Your Meal
          </motion.h2>
          <motion.p className={clsx("uppercase", "fs600")}>In</motion.p>
          <motion.h1 className={clsx("uppercase", "ls3", "fontAccent")}>
            No Time
          </motion.h1>
          <motion.p
            className={clsx("fontBody", "fw500", "fs500", "txtAlgCenter")}
          >
            {homePageText}
          </motion.p>
          <BreathingButton
            className={clsx(classes.cta, "standardBorder")}
            onClick={() => {}}
          />
        </motion.div>
      </AnimatePresence>
      {!homePageActive && <PlannerDescription number={"01"} text={"LAALAL"} />}
    </AnimatedPage>
  );
};

export default HomePage;

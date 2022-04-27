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
    <AnimatedPage className={clsx("fillParent", "centerContents")}>
      <AnimatePresence>
        <motion.div className={clsx("fillParent", classes.homePage)}>
          <motion.section className={clsx(classes.headingSection)}>
            <motion.h2
              className={clsx(
                "uppercase",
                "ls1",
                "fontAccent",
                "txtAlgCenter",
                "lineHeight2",
                "fs600"
              )}
            >
              Plan Your Meal
            </motion.h2>
            <motion.p className={clsx("uppercase", "fs600")}>In</motion.p>
            <motion.h1
              className={clsx("uppercase", "ls3", "fontAccent", "fs600")}
            >
              No Time
            </motion.h1>
          </motion.section>
          <motion.p
            className={clsx("fontBody", "fw500", "fs500", "txtAlgCenter")}
          >
            {homePageText}
          </motion.p>
          <BreathingButton
            className={clsx(classes.cta, "standardBorder", "fs500")}
            onClick={() => {}}
          >
            Explore
          </BreathingButton>
        </motion.div>
      </AnimatePresence>
      {!homePageActive && <PlannerDescription number={"01"} text={"LAALAL"} />}
    </AnimatedPage>
  );
};

export default HomePage;

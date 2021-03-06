import classes from "./HomePage.module.css";
import AnimatedPage from "../../components/animatedPage/AnimatedPage";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import data from "../../assets/jsonData/homePage.json";
import { verticalAlignmentVariants } from "../../framerVariants";
import { useLocation, useNavigate } from "react-router-dom";

const homePageText = data[0].text;

const variants = {
  initial: {
    opacity: 0.5,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.1,
    },
  },
  exit: {
    opacity: 0,
    x: "-100vw",
  },
};

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AnimatedPage
      className={clsx("fillParent", "centerContents", "overflowHidden")}
    >
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className={clsx("fillParent", classes.homePage)}
          variants={variants}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
        >
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
              variants={verticalAlignmentVariants}
              custom={1}
            >
              Plan Your Meal
            </motion.h2>
            <motion.p
              className={clsx("uppercase", "fs600")}
              variants={verticalAlignmentVariants}
              custom={2}
            >
              In
            </motion.p>
            <motion.h1
              className={clsx("uppercase", "ls3", "fontAccent", "fs600")}
              variants={verticalAlignmentVariants}
              custom={3}
            >
              No Time
            </motion.h1>
          </motion.section>
          <motion.p
            className={clsx("fontBody", "fw500", "fs500", "txtAlgCenter")}
            variants={verticalAlignmentVariants}
            custom={4}
          >
            {homePageText}
          </motion.p>
          <motion.button
            className={clsx(classes.cta, "standardBorder", "fs500")}
            onClick={() => {
              navigate("/planner/questionnaire", { state: { from: location } });
            }}
            variants={verticalAlignmentVariants}
            custom={5}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Explore
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </AnimatedPage>
  );
};

export default HomePage;

import classes from "./NotFoundPage.module.css";
import AnimatedPage from "../../components/animatedPage/AnimatedPage";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { verticalAlignmentVariants } from "../../framerVariants";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
  },
};

const NotFoundPage = () => {
  return (
    <AnimatedPage className={clsx("fillParent", "overflowHidden")}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className={classes.container}
          variants={variants}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
        >
          <motion.h1
            variants={verticalAlignmentVariants}
            custom={3}
            className={clsx("fsXl", "fontAccent", "colorGreen")}
          >
            404
          </motion.h1>
          <motion.h3
            variants={verticalAlignmentVariants}
            custom={4}
            className={clsx("fs800", "fontAccent", "colorGreen")}
          >
            Not Found
          </motion.h3>
        </motion.div>
      </AnimatePresence>
    </AnimatedPage>
  );
};

export default NotFoundPage;

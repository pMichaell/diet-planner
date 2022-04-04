import classes from "./Header.module.css";
import { ReactComponent as Apple } from "../../../assets/apple.svg";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import DropdownNav from "../dropdownNav/DropdownNav";
import { List, X } from "phosphor-react";

export const headerVariants = {
  initial: {
    y: "-200px",
  },
  animate: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
};

const navIconVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
  },
};

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const changeDropDownState = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  return (
    <div>
      <motion.header
        className={classes.header}
        variants={headerVariants}
        initial={"initial"}
        animate={"animate"}
      >
        <Apple className={classes.logo} />
        <motion.h2
          className={clsx("uppercase", classes.title)}
          variants={headerVariants}
        >
          Diet Planner
        </motion.h2>
        {!dropdownVisible ? (
          <AnimatePresence>
            <motion.div
              className={classes.navIcon}
              variants={navIconVariants}
              animate={"animate"}
              initial={"initial"}
            >
              <List
                color={"hsla(163 75% 80%)"}
                size={"2.5em"}
                weight={"bold"}
                onClick={changeDropDownState}
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div
            className={classes.navIcon}
            variants={navIconVariants}
            animate={"animate"}
            initial={"initial"}
          >
            <X
              color={"hsla(163 75% 80%)"}
              size={"2.5em"}
              weight={"bold"}
              onClick={changeDropDownState}
            />
          </motion.div>
        )}
      </motion.header>
      <AnimatePresence>{dropdownVisible && <DropdownNav />}</AnimatePresence>
    </div>
  );
};

export default Header;

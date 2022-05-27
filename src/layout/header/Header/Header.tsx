import classes from "./Header.module.css";
import { ReactComponent as Apple } from "../../../assets/apple.svg";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import DropdownNav from "../dropdownNav/DropdownNav";
import { List, X } from "phosphor-react";
import { useLocation, useNavigate } from "react-router-dom";

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
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setDropdownVisible(false);
  }, [location]);

  const changeDropDownState = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  return (
    <header className={classes.header}>
      <a
        href="#main-content"
        className={clsx("curvedBorder", "fontHeadlines", classes.skipNavLink)}
      >
        Skip To Content
      </a>
      <motion.div
        className={classes.headerDiv}
        variants={headerVariants}
        initial={"initial"}
        animate={"animate"}
      >
        <button className={classes.logoButton} onClick={() => navigate("/")}>
          <Apple className={classes.logo} />
        </button>
        <motion.h2
          className={clsx(
            "uppercase",
            classes.title,
            "fontAccent",
            "fs500",
            "clrGreen"
          )}
          variants={headerVariants}
        >
          Diet Planner
        </motion.h2>
        {!dropdownVisible ? (
          <AnimatePresence>
            <motion.button
              className={classes.navIcon}
              variants={navIconVariants}
              animate={"animate"}
              initial={"initial"}
              onClick={changeDropDownState}
            >
              <List className={"clrGreen"} size={"2.5em"} weight={"bold"} />
            </motion.button>
          </AnimatePresence>
        ) : (
          <motion.button
            className={classes.navIcon}
            variants={navIconVariants}
            animate={"animate"}
            initial={"initial"}
            onClick={changeDropDownState}
          >
            <X className={"clrGreen"} size={"2.5em"} weight={"bold"} />
          </motion.button>
        )}
      </motion.div>
      <AnimatePresence>{dropdownVisible && <DropdownNav />}</AnimatePresence>
    </header>
  );
};

export default Header;

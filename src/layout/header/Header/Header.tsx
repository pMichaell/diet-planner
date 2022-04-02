import classes from "./Header.module.css";
import { ReactComponent as Apple } from "../../../assets/apple.svg";
import clsx from "clsx";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import { AnimatePresence, motion } from "framer-motion";
import useWindowDimensions from "../../../hooks/use-window-dimensions";
import NavList from "../navList/NavList";
import { Fragment, useState } from "react";
import DropdownNav from "../dropdownNav/DropdownNav";

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
        <HamburgerMenu onClick={changeDropDownState} />
      </motion.header>
      <AnimatePresence>{dropdownVisible && <DropdownNav />}</AnimatePresence>
    </div>
  );
};

export default Header;

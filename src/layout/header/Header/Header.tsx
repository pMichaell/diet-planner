import classes from "./Header.module.css";
import { ReactComponent as Apple } from "../../../assets/apple.svg";
import clsx from "clsx";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import { motion } from "framer-motion";
import useWindowDimensions from "../../../hooks/use-window-dimensions";
import NavList from "../navList/NavList";

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
  const { width } = useWindowDimensions();
  const isResponsive = width <= 560;

  return (
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
      <HamburgerMenu onClick={() => {}} />
    </motion.header>
  );
};

export default Header;

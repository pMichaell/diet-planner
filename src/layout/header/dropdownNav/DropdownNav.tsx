import { motion } from "framer-motion";
import classes from "./DropdownNav.module.css";

const dropdownVariants = {
  initial: { y: 0 },
  animate: {
    y: "40vh",
    transition: {
      when: "beforeChildren",
    },
  },
};

const DropdownNav = () => {
  return (
    <motion.nav
      className={classes.nav}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "50vh", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
    ></motion.nav>
  );
};

export default DropdownNav;

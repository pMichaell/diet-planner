import { motion } from "framer-motion";
import classes from "./DropdownNav.module.css";
import { Link } from "react-router-dom";

const dropdownVariants = {
  initial: { height: 0, opacity: 0 },
  animate: {
    height: "50vh",
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  exit: {
    height: 0,
    opacity: 0,
  },
};

const itemVariants = {
  initial: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? "100vw" : "-100vw",
  }),
  animate: {
    opacity: 1,
    x: 0,
  },
};

const DropdownNav = () => {
  return (
    <motion.nav
      className={classes.nav}
      variants={dropdownVariants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
    >
      <Link to={"/my-account"}>My Account</Link>
      <Link to={"/my plans"}>My Plans</Link>
      <Link to={"/planner"}>New Plan</Link>
    </motion.nav>
  );
};

export default DropdownNav;

import { AnimatePresence, motion } from "framer-motion";
import classes from "./DropdownNav.module.css";
import { Link, useNavigate } from "react-router-dom";

const dropdownVariants = {
  initial: { height: 0, opacity: 0.5 },
  animate: {
    height: "50vmin",
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
};

const itemVariants = {
  initial: (i: number) => ({
    x: i % 2 === 0 ? "100vw" : "-100vw",
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: (i: number) => ({
    x: i % 2 === 0 ? "100vw" : "-100vw",
    opacity: 0,
  }),
};

const DropdownNav = () => {
  const navigate = useNavigate();

  return (
    <motion.nav
      className={classes.nav}
      variants={dropdownVariants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
    >
      <AnimatePresence>
        <motion.div variants={itemVariants} custom={0} key={0}>
          <Link to={"/my-account"}>My Account</Link>
        </motion.div>
        <motion.div variants={itemVariants} custom={1} key={1}>
          <Link to={"/my plans"}>My Plans</Link>
        </motion.div>
        <motion.div variants={itemVariants} custom={2} key={2}>
          <Link to={"/planner"}>New Plan</Link>
        </motion.div>
      </AnimatePresence>
    </motion.nav>
  );
};

export default DropdownNav;

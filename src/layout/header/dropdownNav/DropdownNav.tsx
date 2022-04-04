import { AnimatePresence, motion } from "framer-motion";
import classes from "./DropdownNav.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Books, IconContext, ListChecks, User } from "phosphor-react";

const dropdownVariants = {
  initial: { height: 0, opacity: 0.5 },
  animate: {
    height: "50vmin",
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const itemVariants = {
  initial: (i: number) => ({
    x: i % 2 === 0 ? "100vw" : "-100vw",
    opacity: 0.5,
  }),
  animate: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15,
    },
  }),
  exit: (i: number) => ({
    x: i % 2 === 0 ? "100vw" : "-100vw",
    opacity: 0,
    transition: {
      delay: i * 0.15,
    },
  }),
  whileHover: {
    scale: 1.1,
  },
  whileTap: {
    scale: 0.9,
  },
};

const DropdownNav = () => {
  const navigate = useNavigate();

  return (
    <IconContext.Provider
      value={{
        color: "hsla(163 75% 80%)",
        size: "2rem",
        weight: "light",
      }}
    >
      <motion.nav
        className={classes.nav}
        variants={dropdownVariants}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
      >
        <AnimatePresence>
          <motion.div
            variants={itemVariants}
            custom={1}
            key={1}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            whileTap={"whileTap"}
            whileHover={"whileHover"}
          >
            <Books />
            <Link to={"/my plans"}>My Plans</Link>
          </motion.div>
          <motion.div
            variants={itemVariants}
            custom={2}
            key={2}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            whileTap={"whileTap"}
            whileHover={"whileHover"}
          >
            <ListChecks />
            <Link to={"/planner"}>New Plan</Link>
          </motion.div>
          <motion.div
            variants={itemVariants}
            custom={3}
            key={0}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            whileTap={"whileTap"}
            whileHover={"whileHover"}
          >
            <User />
            <Link to={"/my-account"}>My Account</Link>
          </motion.div>
        </AnimatePresence>
      </motion.nav>
    </IconContext.Provider>
  );
};

export default DropdownNav;

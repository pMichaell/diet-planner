import { AnimatePresence, motion } from "framer-motion";
import classes from "./DropdownNav.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Books, IconContext, ListChecks, User } from "phosphor-react";

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
            whileHover={"whileHover"}
            whileTap={"whileTap"}
            custom={0}
            key={0}
          >
            <User />
            <Link to={"/my-account"}>My Account</Link>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={"whileHover"}
            whileTap={"whileTap"}
            custom={1}
            key={1}
          >
            <Books />
            <Link to={"/my plans"}>My Plans</Link>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={"whileHover"}
            whileTap={"whileTap"}
            custom={2}
            key={2}
          >
            <ListChecks />
            <Link to={"/planner"}>New Plan</Link>
          </motion.div>
        </AnimatePresence>
      </motion.nav>
    </IconContext.Provider>
  );
};

export default DropdownNav;

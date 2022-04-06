import { AnimatePresence, motion } from "framer-motion";
import classes from "./DropdownNav.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Books, IconContext, ListChecks, User } from "phosphor-react";
import { useEffect } from "react";
import { verticalListItemsVariants } from "../../../framerVariants";

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

const DropdownNav = () => {
  const isLoggedIn = false;

  useEffect(() => {});

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
            variants={verticalListItemsVariants}
            custom={1}
            key={1}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            whileTap={"whileTap"}
            whileHover={"whileHover"}
          >
            <Books />
            <Link to={"/my-plans"}>My Plans</Link>
          </motion.div>
          <motion.div
            variants={verticalListItemsVariants}
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
            variants={verticalListItemsVariants}
            custom={3}
            key={0}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            whileTap={"whileTap"}
            whileHover={"whileHover"}
          >
            <User />
            <Link to={`${isLoggedIn ? "account" : "login"}`}>
              {isLoggedIn ? "My Account" : "Login"}
            </Link>
          </motion.div>
        </AnimatePresence>
      </motion.nav>
    </IconContext.Provider>
  );
};

export default DropdownNav;

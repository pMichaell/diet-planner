import { AnimatePresence, motion } from "framer-motion";
import classes from "./DropdownNav.module.css";
import { Link, useLocation } from "react-router-dom";
import { Books, IconContext, ListChecks, SignOut, User } from "phosphor-react";
import { verticalListItemsVariants } from "../../../framerVariants";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/Firebase";
import { signOut } from "firebase/auth";
import useWindowDimensions from "../../../hooks/use-window-dimensions";
import React from "react";

const DropdownNav = ({
  setDropdownVisible,
}: {
  setDropdownVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [user] = useAuthState(auth);
  const { height } = useWindowDimensions();
  const location = useLocation();

  return (
    <IconContext.Provider
      value={{
        color: "hsla(163 75% 80%)",
        size: "32px",
        weight: "light",
      }}
    >
      <motion.nav
        className={classes.nav}
        initial={{ height: 0, opacity: 0.5 }}
        animate={{ height: height <= 600 ? "40vh" : "30vh", opacity: 1 }}
        onBlur={() => setDropdownVisible(false)}
        exit={{ opacity: 0 }}
      >
        <AnimatePresence>
          <motion.div
            variants={verticalListItemsVariants}
            custom={1}
            key={0}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            whileTap={"whileTap"}
            whileHover={"whileHover"}
          >
            <Books />
            <Link to={"/plans"}>My Plans</Link>
          </motion.div>
          <motion.div
            variants={verticalListItemsVariants}
            custom={2}
            key={1}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            whileTap={"whileTap"}
            whileHover={"whileHover"}
          >
            <ListChecks />
            <Link to={"/planner/questionnaire"} state={{ from: location }}>
              New Plan
            </Link>
          </motion.div>
          {!user && (
            <motion.div
              variants={verticalListItemsVariants}
              custom={3}
              key={2}
              initial={"initial"}
              animate={"animate"}
              exit={"exit"}
              whileTap={"whileTap"}
              whileHover={"whileHover"}
            >
              <User />
              <Link to={"/login"}>Login</Link>
            </motion.div>
          )}
          {user && (
            <motion.div
              variants={verticalListItemsVariants}
              custom={4}
              key={3}
              initial={"initial"}
              animate={"animate"}
              exit={{ opacity: 0, transition: { delay: 0.5 } }}
              whileTap={"whileTap"}
              whileHover={"whileHover"}
            >
              <SignOut />
              <button onClick={() => signOut(auth)}>Log out</button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </IconContext.Provider>
  );
};

export default DropdownNav;

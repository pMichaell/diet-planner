import classes from "./NavList.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navListVariants = {
  initial: { x: "100vw" },
  animate: {
    x: 0,
    transition: {
      stiffness: 200,
      staggerChildren: 0.2,
    },
  },
};

const NavList = () => {
  return (
    <motion.ul
      variants={navListVariants}
      initial={"initial"}
      animate={"animate"}
      className={classes.navList}
    >
      <motion.li variants={navListVariants}>
        <Link to={"my-account"}>My Account</Link>
      </motion.li>
      <motion.li variants={navListVariants}>
        <Link to={"my-plans"}>My Plans</Link>
      </motion.li>
      <motion.li variants={navListVariants}>
        <button>Log out</button>
      </motion.li>
    </motion.ul>
  );
};

export default NavList;

import { ReactNode } from "react";
import { motion } from "framer-motion";
import classes from "./Backdrop.module.css";
import clsx from "clsx";

const Backdrop = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <motion.div
      className={clsx("centerContents", classes.backdrop)}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;

import classes from "./Modal.module.css";
import Backdrop from "../backdrop/Backdrop";
import { motion } from "framer-motion";

const modalVariants = {
  initial: {
    y: "-100vh",
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
  },
};

const Modal = ({
  handleClose,
  displayText,
}: {
  handleClose: () => void;
  displayText: string;
}) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={"modal"}
        variants={modalVariants}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
      ></motion.div>
    </Backdrop>
  );
};

export default Modal;

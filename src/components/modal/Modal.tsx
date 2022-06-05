import classes from "./Modal.module.css";
import Backdrop from "../backdrop/Backdrop";
import { motion } from "framer-motion";
import ModalContext from "../../contexts/modalContext/ModalContext";
import { useContext } from "react";
import clsx from "clsx";

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

const Modal = () => {
  const { closeModal, modalSize, modalChildren } = useContext(ModalContext);

  return (
    <Backdrop onClick={closeModal}>
      <motion.dialog
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          "clrGreen",
          "standardBorder",
          classes.modal,
          modalSize === "big" && classes.big
        )}
        variants={modalVariants}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
      >
        {modalChildren}
      </motion.dialog>
    </Backdrop>
  );
};

export default Modal;

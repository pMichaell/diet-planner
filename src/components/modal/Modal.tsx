import classes from "./Modal.module.css";
import Backdrop from "../backdrop/Backdrop";
import { motion } from "framer-motion";
import ModalContext from "../../contexts/modalContext/ModalContext";
import React, { useContext } from "react";
import clsx from "clsx";
import ReactDOM from "react-dom";

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

  return ReactDOM.createPortal(
    <Backdrop onClick={closeModal}>
      <motion.dialog
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          "clrGreen",
          "standardBorder",
          "centerContents",
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
    </Backdrop>,
    document.getElementById("overlays")!
  );
};

export default Modal;
